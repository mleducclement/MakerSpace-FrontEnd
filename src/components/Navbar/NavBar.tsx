import {Box, Flex, Image} from "@chakra-ui/react";
import logo from "@/assets/makerspace-logo.svg";
import CategoriesMenu from "@/components/Navbar/CategoriesMenu.tsx";
import SearchBar from "@/components/SearchBar.tsx";
import NavBarIcons from "@/components/Navbar/NavBarIcons.tsx";
import {MAX_PAGE_WIDTH} from "@/constants/sizeConstants.ts";

const NavBar = () => {
  return (
    <Flex justifyContent="center">
      <Flex
        padding={2}
        justifyContent={{base: "center", md: "space-between"}}
        alignItems={{ base: "stretch", md: "center"}}
        maxWidth={MAX_PAGE_WIDTH}
        flexGrow={2}
        flexDir={{base: "column", md: "row"}}
        gap={2}>
        <Flex alignItems="center" order={{base: 1, md: 1}}>
          <Image src={logo} alt="logo" boxSize="36px" padding="0.15rem"/>
        </Flex>
        <Flex flexGrow={2} order={{base: 3, md: 2}}>
          <CategoriesMenu/>
          <SearchBar/>
        </Flex>
        <Box order={{base: 2, md: 3}}>
          <NavBarIcons/>
        </Box>
      </Flex>
    </Flex>
  );
};

export default NavBar;