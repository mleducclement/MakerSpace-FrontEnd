import {Box, Flex, Heading, SimpleGrid, useBreakpointValue} from "@chakra-ui/react";
import CategoryCard from "@/components/CategoryCard.tsx";

const PopularCategories = () => {
  // TEMP
  const categories = ["Electronics", "Clothing", "Art", "Toys", "Books", "Jewellery"]

  const renderFlexLayout = () => {
    return (
      <Flex justifyContent="space-between" px={32}>
        {categories.map((category, i) => <CategoryCard key={i} id={i}>{category}</CategoryCard>)}
      </Flex>
    );
  };

  const renderGridLayout = () => {
    return (
      <SimpleGrid columns={{base: 2, sm: 3}} w={{base: "100%", md: "60%"}} mx="auto" columnGap={{base: 9}} rowGap={{base: 6, md: 0}}>
        {categories.map((category, i) => <CategoryCard key={i} id={i}>{category}</CategoryCard>)}
      </SimpleGrid>
    );
  };

  const layoutFn = useBreakpointValue({
    base: renderGridLayout,
    sm: renderGridLayout,
    lg: renderFlexLayout,
  });

  return (
    <Box borderBottom="1px solid" borderTop="1px solid" borderColor="gray.200" py={4}>
      <Heading as="h1" fontSize="1.5rem" mb={4} textAlign="center">Popular Categories</Heading>
      {layoutFn?.()}
    </Box>
  );
};

export default PopularCategories;