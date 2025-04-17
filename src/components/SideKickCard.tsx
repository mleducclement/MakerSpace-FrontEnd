import {Box, Heading, Text} from "@chakra-ui/react";

const SideKickCard = () => {
  return (
    <Box bg="red" position="relative" w="400px" height="30vw" maxHeight="400px"  bgImage="linear-gradient(to top, rgba(0,0,0, 0.8) 0%, rgba(0,0,0,0) 75%), url(https://picsum.photos/600/600)" bgSize="cover" borderRadius={16}>
        <Heading as="h1" fontSize="1.5rem" position="absolute" left="4" bottom="12" color="white">Great Gifts under 50$</Heading>
        <Text as="h1" position="absolute" left="4" bottom="4" color="white">Shop Now</Text>
    </Box>
  );
};

export default SideKickCard;