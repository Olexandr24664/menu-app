import React from "react";
import { Container, Grid, Responsive } from "semantic-ui-react";
import ProductMenuList from "../components/ProductMenuList";
import ProductList from "../components/ProductList";
import DesctopOrderPanel from "../components/DesctopOrderPanel";

const ResColDesktopOrderPanel = () => {
  return (
    <Grid.Column computer="4">
      <DesctopOrderPanel />
    </Grid.Column>
  );
};

const MainPage: React.FC = () => {
  return (
    <Container
      fluid
      style={{ marginTop: "7em", marginBottom: "7em", padding: "0 15px" }}
    >
      <Grid>
        <Grid.Row>
          <Grid.Column computer="4">
            <ProductMenuList />
          </Grid.Column>
          <Grid.Column computer="8" tablet="12" mobile="16">
            <ProductList />
          </Grid.Column>
          <Responsive
            as={ResColDesktopOrderPanel}
            {...Responsive.onlyComputer}
          />
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default MainPage;
