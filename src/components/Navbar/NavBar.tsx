import {Box, Flex, Image} from "@chakra-ui/react";
import logo from "@/assets/makerspace-logo.svg";
import CategoriesMenu from "@/components/Navbar/CategoriesMenu.tsx";
import SearchBar from "@/components/SearchBar.tsx";
import NavBarIcons from "@/components/Navbar/NavBarIcons.tsx";
import {MAX_PAGE_WIDTH} from "@/constants/constants.ts";
import {useEffect, useState} from "react";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Flex justifyContent="center"
          position="sticky"
          top={0}
          zIndex="sticky"
          boxShadow={scrolled ? "sm": "none"}
          transition="box-shadow 0.2s ease"
          bg={scrolled ? "rgba(255,255,255,0.9)" : "white"}
          backdropFilter="saturate(180%) blur(5px)"
          borderBottom={scrolled ? "1px solid" : "none"}
          borderColor={"gray.200"}
    >
      <Flex p={2}
            as="nav"
            justifyContent={{base: "center", sm: "space-between"}}
            alignItems={{base: "stretch", sm: "center"}}
            maxWidth={MAX_PAGE_WIDTH}
            flexGrow={2}
            flexDir={{base: "column", sm: "row"}}
            gap={2}
      >
        <Flex alignItems="center" order={{base: 1, sm: 1}}>
          <Image src={logo} alt="logo" boxSize="36px" padding="0.15rem"/>
        </Flex>
        <Flex flexGrow={2} order={{base: 3, sm: 2}} py={3}>
          <CategoriesMenu/>
          <SearchBar/>
        </Flex>
        <Box order={{base: 2, mid: 3}}>
          <NavBarIcons/>
        </Box>
      </Flex>
    </Flex>
  );
};

export default NavBar;