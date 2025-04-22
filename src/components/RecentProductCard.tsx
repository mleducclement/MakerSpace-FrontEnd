import {useState} from "react";

import {AspectRatio, Badge, Box, GridItem, Icon, Image, Text} from "@chakra-ui/react";
import {MdFavorite, MdFavoriteBorder} from "react-icons/md";

import {PLACEHOLDER_IMAGE_URL} from "@/constants/constants.ts";

interface Props {
  id: number;
}

const RecentProductCard = ({id}: Props) => {
  const [favorited, setFavorited] = useState<boolean>(false);

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
      <Text className="slide-y"
            position="absolute"
            w="full"
            fontSize={{base: "xs", sm: "sm"}}
            textAlign="center"
            bottom={15}
            zIndex={2}
            color="gray.200"
            bg="rgba(0,0,0,0.7)"
            opacity={{base: 1, lg: 0}}
            transition="all 0.1s ease-in"
            transform={{base: "none", lg: "translateY(20px)"}}
      >
        Personalized logo keychains
      </Text>
      <Badge position="absolute"
             className="slide-y"
             top={2}
             left={2}
             borderRadius={16}
             size="sm"
             zIndex={2}
             opacity={{base: 1, lg: 0}}
             transition="all 0.15s ease-in"
             transform={{base: "none", lg: "translateY(10px)"}}
      >
        CA$894.99
      </Badge>
      <Icon className="slide-y"
            position="absolute"
            p={1}
            size="xl"
            color="red.400"
            top={2} right={2}
            zIndex={2}
            bg="white"
            borderRadius="50%"
            opacity={{base: 1, lg: 0}}
            transition="all 0.1s ease-in"
            transform={{base: "none", lg: "translateY(10px)"}}
            onClick={() => setFavorited(!favorited)}
      >
        {favorited ? <MdFavorite /> : <MdFavoriteBorder />}
      </Icon>
    </Box>
  );
};

export default RecentProductCard;