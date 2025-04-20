import PromoGrid from "@/components/PromoGrid";
import SizzlingDeals from "@/components/SizzlingDeals.tsx";
import PopularCategories from "@/components/PopularCategories.tsx";
import RecentProducts from "@/components/RecentProducts.tsx";
import {Box, VStack} from "@chakra-ui/react";

const HomePage = () => {
  return (
    <Box p={8}>
      <VStack gap={{base: 14, md: 20}} align="stretch">
        <PromoGrid/>
        <SizzlingDeals/>
        <PopularCategories/>
        <RecentProducts/>
      </VStack>
    </Box>
  );
};

export default HomePage;