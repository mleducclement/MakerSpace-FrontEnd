import {HStack, Icon, Text} from "@chakra-ui/react";
import {RiShoppingCartLine} from "react-icons/ri";
import {FaHeart, FaRegUser} from "react-icons/fa";
import {useState} from "react";

const NavBarIcons = () => {
  // TODO: Set Global Store Later
  const [signedIn, setSignedIn] = useState(false);

  // TODO: Add interactive layer to icons
  return (
    <HStack gap={3}>
      <Icon size="md">
        <FaHeart />
      </Icon>
      <Icon size="lg">
        <RiShoppingCartLine/>
      </Icon>
      {signedIn
        ? <Icon size="lg"><FaRegUser/></Icon>
        : <Text style={{textWrap: "nowrap"}} onClick={() => setSignedIn(true)}>Sign In</Text>}
    </HStack>
  );
};

export default NavBarIcons;