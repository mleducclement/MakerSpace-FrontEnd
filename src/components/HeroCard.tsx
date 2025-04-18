import {Box, Button, chakra, Flex, Heading, Image, Text, useBreakpointValue} from "@chakra-ui/react";

const HeroCard = () => {
  const arcPath = useBreakpointValue({
    base: `M0,0 L0,50 A50,50 0 0 1 100,50 L100,0 Z`,
    md: `M0,0 50,0 A50,50 0 0 0 50,100 L0,100 Z`
  });

  return (
    <Flex h="full"
          minHeight="300px"
          maxHeight={{base: "600px", md: "400px"}}
          overflow="hidden"
          bg="orange.200"
          borderRadius={16}
          flexDirection={{base: "column", md: "row"}}
          position="relative"
    >
      <Flex w={{base: "100%", md: "50%"}}
            padding={4}
            flexDirection={{base: "column"}}
            justifyContent={{base: "center"}}
            alignItems={{base: "center"}}
            zIndex={1}
      >
        <Heading as="h2" fontSize="4xl" textAlign="center" marginBottom={{base: 4, md: 2}}>Save Big On Easter
          Deals!</Heading>
        <Text textAlign="center">Unique gifts at great prices</Text>
        <Button variant="solid"
                colorPalette="orange"
                size="md"
                marginX="auto"
                marginBottom={{base: 4, md: 0}}
                marginTop={{base: 4, md: 5}}
                borderRadius={20}
        >
          Find Something
        </Button>
      </Flex>

      <Box w={{base: "100%", md: "50%"}} position="relative" overflow="hidden">
        <chakra.svg viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    position="absolute"
                    left={{base: " 0", md: "-1px"}}
                    top={{base: "-1px", md: "0"}}
                    height={{base: "300px", md: "100%"}}
                    width={{base: "100%", md: "200px"}}
                    zIndex={2}
        >
          <path d={arcPath} fill="#fed7aa"/>
        </chakra.svg>
        <Image src="https://picsum.photos/1280/720" alt="card visual" objectFit="cover" w="100%" h="100%"/>
      </Box>
    </Flex>
  );
};

export default HeroCard;