import {useRef} from "react";
import {Flex, HStack, Icon, Image, Input, InputGroup, Text} from "@chakra-ui/react";
import {IoSearch} from "react-icons/io5";
import {FaRegUser} from "react-icons/fa";
import {RiShoppingCartLine} from "react-icons/ri";
import logo from "@/assets/makerspace-logo.svg";
import CategoriesMenu from "@/components/CategoriesMenu.tsx";

const NavBar = () => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <Flex justifyContent="center" bg="green.100">
      <HStack padding={2} justifyContent="space-between" gap={4} maxWidth="1100px" bg="green.100" flexGrow={2}>
        <Image src={logo} alt="logo" boxSize="36px" padding="0.15rem" borderRadius="2xl"/>
        <HStack paddingStart={10}>
          <CategoriesMenu/>
          <Text>Categories</Text>
        </HStack>
        <InputGroup startElement={<IoSearch size={24}/>} paddingStart={10} paddingEnd={5}>
          <Input ref={ref} placeholder="Search..." borderWidth="2px" borderRadius="xl" size="xl" bg="white"/>
        </InputGroup>
        <Icon size="lg">
          <RiShoppingCartLine/>
        </Icon>
        <Icon size="lg">
          <FaRegUser/>
        </Icon>
      </HStack>
    </Flex>
  );
};

export default NavBar;