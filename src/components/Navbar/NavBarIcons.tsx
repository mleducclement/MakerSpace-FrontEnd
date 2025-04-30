import {HStack, IconButton, Text} from "@chakra-ui/react";
import {RiShoppingCartLine} from "react-icons/ri";
import {FaHeart, FaRegUser} from "react-icons/fa";
import {useState} from "react";

const NavBarIcons = () => {
  // TODO: Set Global Store Later
  const [signedIn, setSignedIn] = useState(false);

  // TODO: Add interactive layer to icons
  return (
    <HStack w={{base: "50%", mid: "100%"}}
            margin="auto"
            gap={{base: 6, mid: 3}}
            justifyContent={{base: "center", mid: "space-between"}}
    >
      <IconButton size="md" variant="ghost">
        <FaHeart/>
      </IconButton>
      <IconButton size="md" variant="ghost">
        <RiShoppingCartLine/>
      </IconButton>
      {signedIn
        ? <IconButton size="md" variant="ghost"><FaRegUser/></IconButton>
        : <Text style={{textWrap: "nowrap"}} onClick={() => setSignedIn(true)}>Sign In</Text>}
    </HStack>
  );
};

export default NavBarIcons;