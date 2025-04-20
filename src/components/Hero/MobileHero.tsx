import {Box, Button, Flex, Heading, Image, Text} from "@chakra-ui/react";
import {HeroContentProps} from "@/entities/hero.ts";

const MobileHero = ({title, subtitle, ctaText, imageUrl}: HeroContentProps) => {

  return (
    <Flex direction="column"
          bg="orange.200"
          borderRadius="xl"
          p={6}
          position="relative"
          overflow="visible"
    >
      <Heading textAlign="center" fontSize="28px" mb={2}>
        {title}
      </Heading>
      <Text textAlign="center" mb={4}>
        {subtitle}
      </Text>
      <Button colorPalette="orange"
              alignSelf="center"
              mb={6}
              borderRadius="xl"
      >
        {ctaText}
      </Button>
      <Box w="100%"
           mt={6}
           mx="auto"
           px="auto"
           bg="gray.100"
           borderRadius="lg"
           overflow="hidden"
           maxW="300px"
           boxShadow="0 -2px 6px rgba(0, 0, 0, 0.2)"
           border="1px solid"
           borderColor="#FCA864"
      >
        <Box bg="orange.300"
             borderRadius="md"
             overflow="hidden"
             boxShadow="inset 0 4px 10px rgba(0, 0, 0, 0.25),
                        0 2px 4px rgba(0, 0, 0, 0.05)"
             p={2}
             pb={1.5}
        >
          <Image src={imageUrl} objectFit="cover" w="100%" h="160px" borderRadius="md"
                 border="2px solid rgba(0,0,0,0.15)"/>
        </Box>
      </Box>
    </Flex>
  );
};

export default MobileHero;