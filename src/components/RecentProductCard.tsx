import {useState} from "react";

import {AspectRatio, Badge, Box, GridItem, Icon, Image, Text} from "@chakra-ui/react";
import {MdFavorite, MdFavoriteBorder} from "react-icons/md";

import {PLACEHOLDER_IMAGE_URL} from "@/constants/constants.ts";

interface Props {
  id: number;
}

const RecentProductCard = ({id}: Props) => {
  const [favorited, setFavorited] = useState<boolean>(false);

  const slideYStyles = (translateYValue: number, transitionSecondDuration: number) => {
    return {
      className: "slide-y",
      position: "absolute" as const,
      opacity: { base: 1, lg: 0},
      transition: `all ${transitionSecondDuration}s ease-in`,
      transform: {base: "none", lg: `translateY(${translateYValue}px)`},
      zIndex: 2
    }
  }

  return (
    <Box className="group"
         position="relative"
         w={{base: "full"}}
         maxW={{base: "full", sm: "450px"}}
         mx="auto"
         border="1px solid"
         borderColor="gray.200"
         borderRadius={16}
         transition="all 0.15s ease-in"
         _hover={{cursor: "pointer", boxShadow: "0 4px 12px rgba(0,0,0,0.7)"}}
         overflow="hidden"
    >
      <GridItem>
        <AspectRatio ratio={{base: 1.3, lg: 1.3}} width="100%">
          <Image src={PLACEHOLDER_IMAGE_URL + id} borderRadius={16} zIndex={1}/>
        </AspectRatio>
      </GridItem>
      <Text {...slideYStyles(20, 0.1)}
            w="full"
            fontSize={{base: "xs", sm: "sm"}}
            textAlign="center"
            bottom={15}
            color="gray.200"
            bg="rgba(0,0,0,0.7)"
      >
        Personalized logo keychains
      </Text>
      <Badge {...slideYStyles(10, 0.15)}
             top={2}
             left={2}
             borderRadius={16}
             size="sm"
      >
        CA$894.99
      </Badge>
      <Icon {...slideYStyles(10, 0.1)}
            p={1}
            size="xl"
            color="red.400"
            top={2} right={2}
            bg="white"
            borderRadius="50%"
            onClick={() => setFavorited(!favorited)}
      >
        {favorited ? <MdFavorite /> : <MdFavoriteBorder />}
      </Icon>
    </Box>
  );
};

export default RecentProductCard;