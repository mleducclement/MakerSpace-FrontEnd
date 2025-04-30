import {Button, Card, Flex, HStack, Image, Text} from "@chakra-ui/react";
import RatingBadge from "@/components/RatingBadge.tsx";
import {Product} from "@/entities/product";

interface Props {
  item: Product;
}

const ProductCard = ({item}: Props) => {

  return (
    <Card.Root border="1px solid"
               borderColor="gray.100"
               flex="0 0 auto"
               transition="all 0.1s ease-in"
               w="100%"
               h="100%"
               cursor="pointer"
    >
      <Image src={item.imageUri}/>
      <Card.Body p={2} as={Flex} direction="column">
        <Text fontSize={16} lineClamp={2} mb={2}>{item.name}</Text>
        <RatingBadge rating={item.rating.toFixed(1)}/>
        <HStack flexDirection={{base: "column", lg: "row"}} alignItems="baseline" my={2}>
          <Text color="green.600" fontSize={{base: "1rem", sm: "1.2rem"}}
                fontWeight="bold">CA${item.price.toFixed(2)}</Text>
          <Text color="gray.500" fontSize="0.8rem"
                textDecoration="line-through">CA${(item.price * 0.85).toFixed(2)}</Text>
        </HStack>
        <Flex w="100%" justifyContent="space-between" direction={{base: "column", sm: "row"}} gap={3}>
          <Button flexGrow={1} size="sm" bg="orange.400" _hover={{bg: "orange.600"}}>Buy</Button>
          <Button flexGrow={1} size="sm" variant="outline" borderColor="orange.400" _hover={{bg: "orange.200"}}>Add To
            Cart</Button>
        </Flex>
      </Card.Body>
    </Card.Root>
  )
    ;
};

export default ProductCard;