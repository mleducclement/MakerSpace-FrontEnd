import {Box, Button, chakra, Flex, Heading, Image, Text} from "@chakra-ui/react";
import {HeroContentProps} from "@/entities/hero.ts";

const DesktopHero = ({title, subtitle, ctaText, imageUrl}: HeroContentProps) => {

  return (
    <Flex h="full"
          minHeight="300px"
          maxHeight="400px"
          overflow="hidden"
          bg="orange.200"
          borderRadius={16}
          flexDirection="row"
          position="relative"
          border="1px solid"
          borderColor="gray.200"
    >
      <Flex w="50%"
            px={{sm: 4, mid: 6}}
            flexDirection="column"
            justifyContent="center"
            alignItems="flex-start"
            zIndex={1}
      >
        <Heading as="h2" fontSize={{sm: "28px", md: "4xl"}} lineHeight={{sm: "32px", md: "40px"}} textAlign="left"
                 mb={4}>
          {title}
        </Heading>
        <Text>{subtitle}</Text>
        <Button variant="solid"
                colorPalette="orange"
                size="md"
                mt={5}
                alignSelf="flex-start"
                marginBottom={0}
                borderRadius={20}
        >
          {ctaText}
        </Button>
      </Flex>

      <Box w="50%"
           position="relative"
           maxH="100%"
      >
        <chakra.svg display="block"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    position="absolute"
                    left="-1px"
                    height="calc(100% + 2px)"
                    width="200px"
                    zIndex={2}
                    pointerEvents="none"
        >
          <path d="M0,0 55,0 A50,50 0 0 0 50,100 L0,100 Z" fill="#fed7aa"/>
        </chakra.svg>
        <Image src={imageUrl}
               alt="card visual"
               objectFit="cover"
               w="100%" h="100%"
        />
      </Box>
    </Flex>
  );
};

export default DesktopHero;