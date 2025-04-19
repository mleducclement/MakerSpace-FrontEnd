import { Card, Heading, Image } from "@chakra-ui/react";
import {PLACEHOLDER_IMAGE_URL} from "@/constants/constants.ts";

interface Props {
  id: number;
}

const CategoryCard = ({id}: Props) => {
  return (
    <Card.Root border="none" minWidth="150px">
      <Image src={PLACEHOLDER_IMAGE_URL + id} borderRadius={16} objectFit="cover" h={{base: "190px", md: "200px"}} />
      <Card.Body p={0}>
        <Heading as="h4" mt={1} color="gray.700">
          Category
        </Heading>
      </Card.Body>
    </Card.Root>
  );
};

export default CategoryCard;