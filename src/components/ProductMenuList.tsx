import React, { useState, useEffect } from "react";
import { Menu, Label, Icon } from "semantic-ui-react";
import { fetchMenu } from "../actions";
import { MenuItemI } from "../interfaces/MenuI";
import { Link } from "react-router-dom";

const ProductMenuList: React.FC = () => {
  const [menu, setMenu] = useState<MenuItemI[]>([]);
  useEffect(() => {
    const getMenu = async () => {
      const menuItems = await fetchMenu();
      setMenu(menuItems);
    };
    getMenu();
  }, []);

  return (
    <Menu vertical fluid>
      {menu.map(item => {
        return (
          <Menu.Item
            name={item.name}
            key={item.id}
            link
            as={Link}
            to={`/?menu=${item.id}`}
          >
            <Icon
              name={item.icon}
              style={{ float: "left", marginRight: "15px" }}
            />
            {item.name}
            <Label color="teal">{item.products.length}</Label>
          </Menu.Item>
        );
      })}
    </Menu>
  );
};

export default ProductMenuList;
