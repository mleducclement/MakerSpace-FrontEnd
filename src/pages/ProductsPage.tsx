import productService from "@/services/productService.ts";
import {Box, Grid, GridItem} from "@chakra-ui/react";
import {useEffect, useState} from "react";
import {Product} from "@/entities/product.ts";
import ProductFilters from "@/components/Products/ProductFilters.tsx";
import ProductsSorting from "@/components/Products/ProductsSorting.tsx";
import ProductsGrid from "@/components/Products/ProductsGrid.tsx";

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const data = await productService.get();
        setProducts(data);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch products");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Box mt={20} p={6}>
      <Grid
        templateAreas={{
          base: `"sorting" "main"`,
          md: `"blank sorting" "filters main"`,

        }}
        templateRows={{
          base: "1fr",
          lg: "auto 1fr"
        }}
        templateColumns={{
          base: "1fr",
          lg: "250px 1fr"
        }}
        gap={3}
      >
        <GridItem area="blank" hideBelow="lg"/>
        <GridItem area="sorting" mb={3}>
          <ProductsSorting count={products.length}/>
        </GridItem>
        <GridItem area="filters" hideBelow="md">
          <ProductFilters/>
        </GridItem>
        <GridItem area="main">
          <ProductsGrid items={products} isLoading={isLoading} error={error}/>
        </GridItem>
      </Grid>
    </Box>
  )
    ;
};

export default ProductsPage;