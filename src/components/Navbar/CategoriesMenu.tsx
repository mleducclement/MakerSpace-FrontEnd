import {HStack, IconButton, List, Menu, Portal, Text} from "@chakra-ui/react";
import {RxHamburgerMenu} from "react-icons/rx";

const CategoriesMenu = () => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <HStack paddingX={2} marginStart={{base: 0, sm: 5}} cursor="pointer" borderRadius="lg"
                transition="all 0.10s ease-in"
                _hover={{
                  bg: "gray.300",
                  padding: 2
                }}>
          <IconButton size="lg" color="gray.700" variant="ghost">
            <RxHamburgerMenu/>
          </IconButton>
          <Text hideBelow="md">Categories</Text>
        </HStack>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content padding={0}>
            <List.Root>
              {[1, 2, 3, 4, 5].map((el) => <List.Item
                _hover={{bg: "gray.200", textDecoration: "underline", cursor: "pointer"}} paddingY={1}><a
                style={{outline: "none"}}>Category {el}</a></List.Item>)}
            </List.Root>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default CategoriesMenu;