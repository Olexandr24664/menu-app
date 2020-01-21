import React from "react";
import { Link } from "react-router-dom";
import { Menu, Responsive, Icon } from "semantic-ui-react";

const BottomMenu: React.FC = () => {
  return (
    <Menu fixed="bottom" inverted borderless widths="4" icon="labeled">
      <Menu.Item name="home" as={Link} to="/">
        <Icon name="home" />
        Home
      </Menu.Item>
      <Menu.Item name="menu" as={Link} to="/menu">
        <Icon name="food" />
        Menu
      </Menu.Item>
      <Menu.Item name="weiter" link>
        <Icon name="bell outline" />
        Weiter
      </Menu.Item>
      <Menu.Item name="myorder" as={Link} to="/order">
        <Icon name="shopping basket" />
        My order
      </Menu.Item>
    </Menu>
  );
};

const MobileBottomFixedMenu: React.FC = () => {
  return <Responsive as={BottomMenu} {...Responsive.onlyMobile} />;
};

export default MobileBottomFixedMenu;
