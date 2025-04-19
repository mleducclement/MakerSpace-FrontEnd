import {Card, HStack, Image, Text} from "@chakra-ui/react";

import {PLACEHOLDER_IMAGE_URL} from "@/constants/constants.ts";
import RatingBadge from "@/components/RatingBadge.tsx";

interface Props {
  id: number;
}

const DealCard = ({id}: Props) => {
  const responsiveWidths = {
    base: "60%",
    sm: "40%",
    md: "37%",
    lg: "30%",
    xl: "23%"
  };

  return (
    <Card.Root borderRadius={16}
               flex="0 0 auto"
               transition="all 0.1s ease-in"
               w={{...responsiveWidths}}
               _hover={{
                 transform: "scale(1.01)",
                 boxShadow: "lg"
               }}
    >
      <Image src={PLACEHOLDER_IMAGE_URL + id} borderTopRadius={16}/>
      <Card.Body>
        <Text>Product with a pretty long name</Text>
        <RatingBadge/>
        <HStack flexDirection={{base: "column", lg: "row"}} alignItems={{base: "start", lg: "center"}} gap={1}>
          <Text color="green.600" fontSize={{base: "1rem", sm: "1.2rem"}} fontWeight="bold">CA$11249.99</Text>
          <Text color="gray.500" fontSize="0.8rem" textDecoration="line-through">CA$11299.99</Text>
        </HStack>
      </Card.Body>
    </Card.Root>
  );
};

export default DealCard;