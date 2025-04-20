import {Card, GridItem, Heading, Image} from "@chakra-ui/react";
import {PLACEHOLDER_IMAGE_URL} from "@/constants/constants.ts";
import {ReactNode} from "react";

interface Props {
  id: number;
  children: ReactNode;
}

const CategoryCard = ({id, children}: Props) => {
  return (
    <GridItem>
      <Card.Root border="none" w={{base: "100px", xl: "125px"}} mx="auto">
        <Image src={PLACEHOLDER_IMAGE_URL + id} borderRadius="full" objectFit="cover" h={{base: "100px", xl: "125px"}}/>
        <Card.Body p={0}>
          <Heading as="h4" mt={1} color="gray.700" textAlign="center">
            {children}
          </Heading>
        </Card.Body>
      </Card.Root>
    </GridItem>
  );
};

export default CategoryCard;