import {useEffect, useRef, useState} from "react";

import {Box, Button, Flex, Heading, HStack, Icon, Text} from "@chakra-ui/react";
import {FaChevronLeft, FaChevronRight, FaRegClock} from "react-icons/fa";

import DealCard from "@/components/DealCard.tsx";

const SizzlingDeals = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  // TODO: Extract into hook to declutter component

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const updateScrollState = () => {
      setCanScrollLeft(carousel.scrollLeft > 0);
      setCanScrollRight(carousel.scrollLeft + carousel.clientWidth < carousel.scrollWidth - 1);
    };

    updateScrollState();

    carousel.addEventListener("scroll", updateScrollState);
    const resizeObserver = new ResizeObserver(updateScrollState);
    resizeObserver.observe(carousel);

    return () => {
      carousel.removeEventListener("scroll", updateScrollState);
      resizeObserver.disconnect();
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
    <Box bg="orange.50"
         p={{base: "0.5rem 0.5rem 0.2rem 0.5rem", sm: "2rem 2rem 1rem 2rem"}}
         borderRadius={16}
         boxShadow="0 0px 15px rgba(0,0,0,0.2)"
    >
      <HStack justifyContent="space-between" mb={3}>
        <HStack align="baseline" >
          <Heading as="h1" fontSize="1.5rem">Sizzling Deals</Heading>
          <HStack as="span" gap={1}>
            <Text fontSize="0.9rem">00:01:48</Text>
            <Icon as={FaRegClock} boxSize="0.9rem" mb="2px"/>
          </HStack>
        </HStack>
        <HStack>
          <Button size="xs"
                  bg="white"
                  border="1px solid"
                  borderColor="gray.300"
                  color="black"
                  _hover={{transform: "scale(1.1)", boxShadow: "inset 0 4px 4px rgba(0,0,0,0.2)", transition: "all 0.2s ease"}}
                  disabled={!canScrollLeft}
                  onClick={scrollLeft}
                  display={{base: "none", md: "block"}}
                  borderRadius={12}
          >
            <FaChevronLeft />
          </Button>
          <Button size="xs"
                  bg="white"
                  border="1px solid"
                  borderColor="gray.300"
                  color="black"
                  _hover={{transform: "scale(1.1)", boxShadow: "inset 0 4px 4px rgba(0,0,0,0.2)", transition: "all 0.2s ease"}}
                  disabled={!canScrollRight}
                  onClick={scrollRight}
                  display={{base: "none", md: "block"}}
                  borderRadius={12}
          >
            <FaChevronRight/>
          </Button>
        </HStack>
      </HStack>
      <Box w="100%" position="relative" overflow="hidden" px={3}>
        <Flex ref={carouselRef}
              gap={3}
              p="0.1rem 0 1rem 0"
              css={{"&::-webkit-scrollbar": {display: "none"}}}
              overflowX="auto"
              scrollBehavior="smooth"
        >
          {Array.from({length: 12}).map((_, i) => <DealCard key={i} id={i}/>)}
        </Flex>
        <Box position="absolute" top={0} right={-2} h="100%" w="150px" pointerEvents="none" zIndex={1}
             bgImage="linear-gradient(-90deg, rgba(255,255,255,1) 0%, transparent 80%)" borderRadius={16}/>
      </Box>
    </Box>
  );
};

export default SizzlingDeals;