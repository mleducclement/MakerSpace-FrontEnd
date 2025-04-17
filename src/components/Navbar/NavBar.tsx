import {Flex, HStack, Image} from "@chakra-ui/react";
import logo from "@/assets/makerspace-logo.svg";
import CategoriesMenu from "@/components/Navbar/CategoriesMenu.tsx";
import SearchBar from "@/components/SearchBar.tsx";
import NavBarIcons from "@/components/Navbar/NavBarIcons.tsx";
import {MAX_PAGE_WIDTH} from "@/constants/sizeConstants.ts";

const NavBar = () => {
  return (
    <Flex justifyContent="center">
      <HStack padding={2} justifyContent="space-between" maxWidth={MAX_PAGE_WIDTH} flexGrow={2}>
        <Image src={logo} alt="logo" boxSize="36px" padding="0.15rem" borderRadius="2xl"/>
        <CategoriesMenu/>
        <SearchBar/>
        <NavBarIcons/>
      </HStack>
    </Flex>
  );
};

export default NavBar;