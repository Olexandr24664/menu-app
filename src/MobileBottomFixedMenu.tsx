import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Responsive, Icon } from "semantic-ui-react";
import { useToggleSidebarDispatch } from "./context/menuSidebarContext";

const activeMenuItem = (): string => {
  if (window.location.pathname.length === 1) {
    return "home";
  }

  if (window.location.pathname.indexOf("order") >= 0) {
    return "order";
  }

  return "";
};

const BottomMenu: React.FC = () => {
  const [active, setActive] = useState("");
  const toggleSidebar = useToggleSidebarDispatch();
  // const handleItemClick = (e: any, { name }: any) => setActive(name);
  const handleItemClick = (e: any, { name }: any) => setActive("");

  return (
    <Menu fixed="bottom" inverted borderless widths="4" icon="labeled">
      <Menu.Item
        name="home"
        as={Link}
        to="/"
        active={active === "home"}
        onClick={handleItemClick}
      >
        <Icon name="home" />
        Home
      </Menu.Item>
      <Menu.Item name="menu" link onClick={() => toggleSidebar()}>
        <Icon name="food" />
        Menu
      </Menu.Item>
      <Menu.Item name="weiter" link>
        <Icon name="bell outline" />
        Weiter
      </Menu.Item>
      <Menu.Item
        name="order"
        as={Link}
        to="/order"
        active={active === "order"}
        onClick={handleItemClick}
      >
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
