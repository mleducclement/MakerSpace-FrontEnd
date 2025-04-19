import {Badge, HStack} from "@chakra-ui/react";
import {IoStar} from "react-icons/io5";

const RatingBadge = () => {
  return (
    <HStack alignItems="center">
      <Badge w="fit-content"
             display={{base: "none", sm: "flex"}}
             fontSize="12px"
             lineHeight="20px"
      >
        4.7<IoStar style={{marginBottom: "2px"}}/>
      </Badge>
    </HStack>
  );
};

export default RatingBadge;