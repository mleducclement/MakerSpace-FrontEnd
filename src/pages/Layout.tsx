import {Box} from "@chakra-ui/react";
import NavBar from "@/components/Navbar/NavBar.tsx";
import {MAX_PAGE_WIDTH} from "@/constants/constants.ts";
import ProductsPage from "@/pages/ProductsPage.tsx";

const Layout = () => {
  return (
    <>
      <NavBar/>
      <Box maxWidth={MAX_PAGE_WIDTH} margin="0 auto">
        <ProductsPage/>
      </Box>
    </>
  );
};

export default Layout;