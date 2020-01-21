import React from "react";
import { Menu, Label } from "semantic-ui-react";

interface MenuItemI {
  name: string;
  amount: number;
}

const menuList: MenuItemI[] = [
  { name: "food", amount: 30 },
  { name: "drinks", amount: 7 }
];

const ProductMenuList: React.FC = () => {
  const menuItems = menuList.map(item => {
    return (
      <Menu.Item name={item.name} key={item.name}>
        {item.name}
        <Label color="teal">{item.amount}</Label>
      </Menu.Item>
    );
  });
  return (
    <Menu vertical fluid>
      {menuItems}
    </Menu>
  );
};

export default ProductMenuList;
