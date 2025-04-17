import {Box, Button, Flex, Heading, Image, Text} from "@chakra-ui/react";

const HeroCard = () => {
  return (
    <Flex height="30vw" maxHeight="400px" bg="orange.200" borderRadius={16}>
      <Box bg="orange.200" width="60%" borderRadius={16}>
        <Flex height="100%"
              justifyContent="center"
              alignItems="center"
              flexDirection="column">
          <Heading as="h1" fontSize="2xl">Save Big On Easter Deals!</Heading>
          <Text as="p">Presents your loved ones won't forget</Text>
          <Button variant="solid" colorPalette="orange" size="md" marginTop={10} borderRadius={20}>Find Something</Button>
        </Flex>
      </Box>
      <Image src="https://picsum.photos/600/600"
             objectFit="cover"
             w="40%"
             h="100%"
             borderLeftRadius={80}
             borderRightRadius={16}/>
    </Flex>
  );
};

export default HeroCard;