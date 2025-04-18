import {Badge, Card, HStack, Image, Text} from "@chakra-ui/react";

const DealCard = () => {
  return (
    <Card.Root borderRadius={16} flex="0 0 auto" w={{ base: "80%", sm: "40%", md: "37%", lg: "30%", xl: "23%" }}>
      <Image src="https://picsum.photos/1280/720" borderTopRadius={16} />
      <Card.Body>
        <HStack justifyContent="space-between">
          <Text>Product 1</Text>
          <Badge>4.7</Badge>
        </HStack>
        <HStack flexDirection={{ base: "column", lg: "row" }} alignItems={{base: "start", lg: "center"}} gap={1}>
          <Text color="green.600" fontSize="1.2rem" fontWeight="bold">CA$11249.99</Text>
          <Text color="gray.500" fontSize="0.8rem" textDecoration="line-through">CA$11299.99</Text>
        </HStack>
      </Card.Body>
    </Card.Root>
  );
};

export default DealCard;