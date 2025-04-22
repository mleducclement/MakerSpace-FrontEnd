import {Card, GridItem, Text, Image} from "@chakra-ui/react";
import {PLACEHOLDER_IMAGE_URL} from "@/constants/constants.ts";
import {ReactNode} from "react";

interface Props {
  id: number;
  children: ReactNode;
}

const CategoryCard = ({id, children}: Props) => {
  return (
    <GridItem>
      <Card.Root w={{base: "115px", xl: "125px"}} p={3} mx="auto" border="none" _hover={{cursor: "pointer", boxShadow: "0 4px 12px rgba(0,0,0,0.25)"}}>
        <Image src={PLACEHOLDER_IMAGE_URL + id} borderRadius="full" objectFit="cover" h={{base: "115px", xl: "125px"}} border="1px solid" borderColor="gray.200"/>
        <Card.Body p={0}>
          <Text as="h4" mt={1} color="gray.800" textAlign="center">
            {children}
          </Text>
        </Card.Body>
      </Card.Root>
    </GridItem>
  );
};

export default CategoryCard;