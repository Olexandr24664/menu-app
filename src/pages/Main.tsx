import React from "react";
import { Container, Grid } from "semantic-ui-react";
import ProductMenuList from "../components/ProductMenuList";
import ProductList from "../components/ProductList";
import DesctopOrderPanel from "../components/DesctopOrderPanel";

const Main: React.FC = () => {
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
          <Grid.Column computer="4" only="computer">
            <DesctopOrderPanel />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default Main;
