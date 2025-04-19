import {Box, Flex, GridItem, Heading, SimpleGrid, useBreakpointValue} from "@chakra-ui/react";
import CategoryCard from "@/components/CategoryCard.tsx";
import {useRef} from "react";

const CategoriesGrid = () => {
  const carouselRef = useRef(null);

  const renderLgLayout = () => {
    return (
      <Flex justifyContent="space-between" gap={3}>
        {Array.from({length: 6}).map((_, i) => <CategoryCard key={i} id={i}/>)}
      </Flex>
    );
  };

  const renderMdLayout = () => {
    return (
      <SimpleGrid columns={3} gap={3}>
        {Array.from({length: 6}).map((_, i) => <GridItem><CategoryCard id={i}/></GridItem>)}
      </SimpleGrid>
    );
  };

  const renderSmLayout = () => {
    return (
      <Box w="100%" position="relative" overflow="hidden">
        <Flex ref={carouselRef}
              p="0 1rem 1rem 0"
              gap={3}
              css={{"&::-webkit-scrollbar": {display: "none"}}}
              overflowX="auto"
              scrollBehavior="smooth"
        >
          {Array.from({length: 6}).map((_, i) => <GridItem><CategoryCard id={i}/></GridItem>)}
        </Flex>
      </Box>
    );
  };

  const layout = useBreakpointValue({
    base: renderSmLayout(),
    md: renderMdLayout(),
    lg: renderLgLayout(),
  });

  return (
    <Box p={8}>
      <Heading as="h2" mb={4}>Popular Categories</Heading>
      {layout}
    </Box>
  );
};

export default CategoriesGrid;