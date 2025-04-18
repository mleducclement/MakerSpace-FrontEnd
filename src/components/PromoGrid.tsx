import {GridItem, SimpleGrid} from "@chakra-ui/react";
import SideKickCard from "@/components/SideKickCard.tsx";
import HeroCard from "@/components/HeroCard.tsx";

const PromoGrid = () => {

  return (
    <SimpleGrid columns={{base: 1, xl: 3}} padding={{base: 4, md: 8}} gap={10}>
      <GridItem colSpan={{base: 1, xl: 2}}>
        <HeroCard/>
      </GridItem>
      <GridItem hideBelow="xl">
        <SideKickCard/>
      </GridItem>
    </SimpleGrid>
  );
};

export default PromoGrid;