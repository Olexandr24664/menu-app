import React from "react";
import { Link } from "react-router-dom";
import { Image, Responsive, Menu } from "semantic-ui-react";
import SearchBar from "./components/SearchBar";

const src = "https://react.semantic-ui.com/images/wireframe/image.png";

const DesktopMenu = () => {
  return (
    <Menu.Menu position="right">
      <Menu.Item as={Link} name="About" to="/about" />
      <Menu.Item as={Link} name="My Order" to="/order" />
    </Menu.Menu>
  );
};

const Header: React.FC = () => {
  return (
    <Menu fixed="top" inverted>
      <Menu.Item as={Link} header to="/">
        <Image size="mini" src={src} style={{ marginRight: "1.5em" }} />
        Project Name
      </Menu.Item>
      <Menu.Item>
        <SearchBar />
      </Menu.Item>
      <Responsive as={DesktopMenu} minWidth={Responsive.onlyTablet.minWidth} />
    </Menu>
  );
};

export default Header;
