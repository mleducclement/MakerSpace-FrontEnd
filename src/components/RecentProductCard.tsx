import {AspectRatio, Badge, GridItem, Image} from "@chakra-ui/react";
import {PLACEHOLDER_IMAGE_URL} from "@/constants/constants.ts";

interface Props {
  id: number;
}

const RecentProductCard = ({id}: Props) => {
  return (
    <GridItem position="relative" w={{base: "full", md: "100%"}} maxW={{base: "full", sm: "450px"}} mx="auto">
      <AspectRatio ratio={{base: 1.3, md: 1 / 1.2, lg: 1.3}} width="100%">
        <Image src={PLACEHOLDER_IMAGE_URL + id} borderRadius={16}/>
      </AspectRatio>
      <Badge position="absolute" left={2} bottom={2} borderRadius={16} fontSize="12px" bg="gray.100">CA$1894.99</Badge>
    </GridItem>
  );
};

export default RecentProductCard;