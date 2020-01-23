import React, { useEffect } from "react";
import {
  Grid,
  Container,
  Image,
  Dimmer,
  Loader,
  Header,
  Label,
  Rating,
  Segment,
  Divider,
  Responsive,
  Tab
} from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProduct } from "../actions";
import { AppState } from "../reducers";
import { createSelector } from "reselect";
import { ProductI } from "../interfaces";
import ProductQuantityInput from "../components/ProductQuantityInput";

const getProducts = (state: AppState) => state.products;

const getProduct = createSelector(
  getProducts,
  (_: any, id: string) => id,
  (products, id) => {
    return products.find(p => p.id === id);
  }
);

const tabPanes = ({ description }: ProductI) => {
  return [
    {
      menuItem: "Description",
      render: () => <Tab.Pane>{description}</Tab.Pane>
    },
    { menuItem: "Comments", render: () => <Tab.Pane>Comments...</Tab.Pane> }
  ];
};

const ProductPage: React.FC = () => {
  const { productid } = useParams<{ productid: string }>();
  const product = useSelector((state: AppState) =>
    getProduct(state, productid)
  );
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchProduct(productid));
  }, [dispatch, productid]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <Container
      style={{ marginTop: "7em", marginBottom: "7em", padding: "0 15px" }}
    >
      <Grid>
        <Grid.Row columns="2">
          <Grid.Column stretched mobile="16" tablet="8" computer="8">
            <Image src={product.photo} rounded />
          </Grid.Column>
          <Responsive as={Grid.Column} width="16" {...Responsive.onlyMobile}>
            <Divider />
          </Responsive>
          <Grid.Column mobile="16" tablet="8" computer="8" style={{}}>
            <Header as="h2">{product.name}</Header>
            <Divider />
            {product.price_discount > 0 ? (
              <React.Fragment>
                <Label tag as="span" color="red" size="big">
                  <s>{product.price} $</s> - <b>{product.price_discount}$</b>
                </Label>
              </React.Fragment>
            ) : (
              <Label tag as="span" color="teal" size="big">
                {product.price} $
              </Label>
            )}
            <Divider />
            <div style={{ marginTop: "15px" }}>
              <Header as="h3">Rating</Header>
              <Rating disabled rating={product.rating} maxRating="5" />
            </div>
            <Divider />
            <p>{product.excerpt}</p>
            <ProductQuantityInput productId={product.id} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Tab panes={tabPanes(product)} style={{ margin: "15px 0" }} />
    </Container>
  );
};

export default ProductPage;
