import { Dimmer, Header, Icon } from "semantic-ui-react";

import React from "react";
import ProductMenuList from "./ProductMenuList";
import {
  useActiveSidebarState,
  useToggleSidebarDispatch
} from "../context/menuSidebarContext";
import history from "../history";

const DimmerMenu: React.FC = () => {
  const { active } = useActiveSidebarState();
  const toggleSidebar = useToggleSidebarDispatch();
  return (
    <Dimmer
      active={active}
      onClickOutside={toggleSidebar}
      page
      id="dimmer-menu"
    >
      <Header size="medium" textAlign="left" inverted>
        Menu
        <Icon
          link
          fitted
          name="home"
          style={{ float: "right" }}
          onClick={() => {
            history.push("/");
          }}
        />
      </Header>
      <ProductMenuList />
    </Dimmer>
  );
};

export default DimmerMenu;
