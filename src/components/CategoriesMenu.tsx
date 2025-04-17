import {Icon, List, Menu, Portal} from "@chakra-ui/react";
import {RxHamburgerMenu} from "react-icons/rx";

const CategoriesMenu = () => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Icon size="lg">
          <RxHamburgerMenu/>
        </Icon>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <List.Root>
              <List.Item paddingY={2}><a href="#">Category 1</a></List.Item>
              <List.Item paddingY={2}><a href="#">Category 2</a></List.Item>
              <List.Item paddingY={2}><a href="#">Category 3</a></List.Item>
              <List.Item paddingY={2}><a href="#">Category 4</a></List.Item>
              <List.Item paddingY={2}><a href="#">Category 5</a></List.Item>
            </List.Root>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default CategoriesMenu;