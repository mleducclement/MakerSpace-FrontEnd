import {Box, Heading, SimpleGrid} from "@chakra-ui/react";
import RecentProductCard from "@/components/RecentProductCard.tsx";

const RecentProducts = () => {
  return (
    <Box padding="0.75rem 3rem 3rem 3rem" borderRadius={16} boxShadow="0 0px 15px rgba(0,0,0,0.2)">
      <Heading as="h1" fontSize="1.5rem" mb={3} textAlign="center">Recently Viewed</Heading>
      <SimpleGrid gap={6} columns={{base: 1, md: 3, lg: 4}}>
        {Array.from({length: 6}).map((_, i) => <RecentProductCard key={i} id={i}/>)}
      </SimpleGrid>
    </Box>
  );
};

export default RecentProducts;