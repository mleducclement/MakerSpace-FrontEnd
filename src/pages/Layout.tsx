import {Box} from "@chakra-ui/react";
import NavBar from "@/components/Navbar/NavBar.tsx";
import HomePage from "@/pages/HomePage.tsx";
import {MAX_PAGE_WIDTH} from "@/constants/sizeConstants.ts";

const Layout = () => {
  return (
    <>
      <NavBar/>
      <Box maxWidth={MAX_PAGE_WIDTH} margin="0 auto">
        <HomePage/>
      </Box>
    </>
  );
};

export default Layout;