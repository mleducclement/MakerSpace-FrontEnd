import {Box, Heading, Image, Text} from "@chakra-ui/react";
import {PLACEHOLDER_IMAGE_URL} from "@/constants/constants.ts";

const SideKickCard = () => {
  return (
    <Box position="relative"
         w="100%"
         h="full"
         overflow="hidden"
         borderRadius={16}
    >
      <Box position="absolute"
           top="0"
           bottom="0"
           left="0"
           right="0"
           bgImage="linear-gradient(0deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 50%)"
           zIndex={1}/>
      <Image position="absolute"
             w="100%"
             h="100%"
             top="0"
             left="0"
             src={PLACEHOLDER_IMAGE_URL}
             alt="card visual"
             objectFit="cover"
             zIndex={0}/>
      <Heading as="h1"
               fontSize="1.5rem"
               position="absolute"
               left="4"
               bottom="12"
               color="white"
               zIndex={2}
      >
        Great Gifts under 50$
      </Heading>
      <Text position="absolute"
            left="4"
            bottom="4"
            color="white"
            zIndex={2}
      >
        Shop Now
      </Text>
    </Box>
  );
};

export default SideKickCard;