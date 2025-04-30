import {Product} from "@/entities/product.ts";
import {GridItem, SimpleGrid, Spinner} from "@chakra-ui/react";
import ProductCard from "@/components/Products/ProductCard.tsx";

interface Props {
  items: Product[];
  isLoading?: boolean;
  error: string | null;
}

const ProductsGrid = ({items, isLoading, error}: Props) => {
  if (error) return null;
  if (isLoading) return <Spinner/>;

  return (
    <SimpleGrid columns={{base: 2, sm: 2, lg: 3, xl: 4}} gap={6}>
      {items.map((product: Product) => (
        <GridItem key={product.id}><ProductCard item={product}/></GridItem>))}
    </SimpleGrid>
  );
};

export default ProductsGrid;