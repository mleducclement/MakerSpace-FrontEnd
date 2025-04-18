import {useEffect, useRef, useState} from "react";

import {Box, Button, Flex, Heading, HStack} from "@chakra-ui/react";
import {FaCaretLeft, FaCaretRight} from "react-icons/fa";

import DealCard from "@/components/DealCard.tsx";
import "./BustedDeals.css";

const BustedDeals = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const updateScrollState = () => {
      setCanScrollLeft(carousel.scrollLeft > 0);
      setCanScrollRight(carousel.scrollLeft + carousel.clientWidth < carousel.scrollWidth - 1);
    };

    updateScrollState();

    carousel.addEventListener("scroll", updateScrollState);
    window.addEventListener("resize", updateScrollState);

    return () => {
      carousel.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  const scrollLeft = () => {
    const width = carouselRef.current?.clientWidth || 0;
    console.log(carouselRef.current?.scrollLeft);
    carouselRef.current?.scrollBy({left: -width, behavior: "smooth"});
  };

  const scrollRight = () => {
    const width = carouselRef.current?.clientWidth || 0;
    console.log(carouselRef.current?.scrollLeft);
    carouselRef.current?.scrollBy({left: width, behavior: "smooth"});
  };

  return (
    <>
      <HStack px={8} mt={4} justifyContent="space-between" mb={3}>
        <Heading as="h1" fontSize="1.5rem">Incredible Deals</Heading>
        <HStack>
          <Button size="xs"
                  bg="orange.200"
                  color="black"
                  _hover={{bg: "orange.300"}}
                  disabled={!canScrollLeft}
                  onClick={scrollLeft}
                  boxShadow="0 4px 8px 0 rgba(0,0,0,0.5)"
          >
            <FaCaretLeft/>
          </Button>
          <Button size="xs"
                  bg="orange.200"
                  color="black"
                  _hover={{bg: "orange.300"}}
                  disabled={!canScrollRight}
                  onClick={scrollRight}
                  boxShadow="0 4px 8px 0 rgba(0,0,0,0.5)"
          >
            <FaCaretRight/>
          </Button>
        </HStack>
      </HStack>
      <Box w="100%" px={8} position="relative" overflow="hidden">
        <Flex ref={carouselRef}
              p={4}
              gap={3}
              css={{"&::-webkit-scrollbar": {display: "none"}}}
              overflowX="auto"
              scrollBehavior="smooth"
        >
          {Array.from({length: 12}).map((_, i) => <DealCard key={i}/>)}
        </Flex>
        <Box position="absolute" top={0} right={0} h="100%" w="150px" pointerEvents="none" zIndex={1}
             bgImage="linear-gradient(-90deg, rgba(255,255,255, 0.9), transparent)"/>
      </Box>
    </>
  );
};

export default BustedDeals;