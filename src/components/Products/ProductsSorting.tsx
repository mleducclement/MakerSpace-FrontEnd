import {CloseButton, Drawer, HStack, IconButton, NativeSelect, Portal, Text} from "@chakra-ui/react";
import {LuFilter} from "react-icons/lu";
import ProductFilters from "@/components/Products/ProductFilters.tsx";

interface Props {
  count: number;
}

const ProductsSorting = ({count}: Props) => {
  const formatResultCount = () => {
    if (count === 0) return `${count} Results`;
    if (count === 1) return `${count} Result`;
    return `${count} Results`;
  };

  return (
    <HStack w="100%" px={4} py={2} justifyContent="space-between" bg="gray.100" borderRadius={16}>
      <Text textAlign="start" hideBelow="md">
        {formatResultCount()}
      </Text>
      <HStack>
        <Text textWrap="nowrap" fontSize={{base: "0.9rem", sm: "1rem"}}>Sort By:</Text>
        <NativeSelect.Root bg="white" borderRadius={16}>
          <NativeSelect.Field borderRadius={16}>
            <option value="1">Best Match</option>
            <option value="2">Sort 2</option>
            <option value="3">Sort 3</option>
          </NativeSelect.Field>
          <NativeSelect.Indicator/>
        </NativeSelect.Root>
      </HStack>

      <Drawer.Root>
        <Drawer.Trigger asChild>
          <IconButton bg="transparent" color="gray.700" hideFrom="md">
            <LuFilter/>
          </IconButton>
        </Drawer.Trigger>
        <Portal>
          <Drawer.Backdrop/>
          <Drawer.Positioner>
            <Drawer.Content>
              <Drawer.Body px={3}>
                <ProductFilters/>
              </Drawer.Body>
              <Drawer.CloseTrigger asChild>
                <CloseButton size="sm"/>
              </Drawer.CloseTrigger>
            </Drawer.Content>
          </Drawer.Positioner>
        </Portal>
      </Drawer.Root>
    </HStack>
  );
};

export default ProductsSorting;