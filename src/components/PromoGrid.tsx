import {GridItem, SimpleGrid, useBreakpointValue} from "@chakra-ui/react";

import SideKickCard from "@/components/SideKickCard.tsx";
import DesktopHero from "@/components/Hero/DesktopHero.tsx";
import MobileHero from "@/components/Hero/MobileHero.tsx";
import {usePromoHeroContent} from "@/hooks/usePromoHeroContent.ts";

const PromoGrid = () => {
  const Hero = useBreakpointValue({
    base: MobileHero,
    sm: DesktopHero,
  })

  const promo = usePromoHeroContent();

  return (
    <SimpleGrid columns={{base: 1, xl: 3}} gap={10}>
      <GridItem colSpan={{base: 1, xl: 2}}>
        {Hero && <Hero {...promo}/>}
      </GridItem>
      <GridItem hideBelow="xl">
        <SideKickCard/>
      </GridItem>
    </SimpleGrid>
  );
};

export default PromoGrid;