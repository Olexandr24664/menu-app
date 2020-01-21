import React, { useState, useEffect } from "react";
import { Grid, Responsive, SemanticWIDTHS } from "semantic-ui-react";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import debounce from "lodash/debounce";
import { AppState } from "../reducers";
import { ProductI } from "../interfaces/ProductI";
import { fetchProducts } from "../actions";
import ProductListItem from "./ProductListItem";

const renderListItems = (products: ProductI[]) => {
  return products.map(product => {
    return (
      <Grid.Column key={product.id} style={{ paddingBottom: "1em" }}>
        <ProductListItem product={product} />
      </Grid.Column>
    );
  });
};

interface GridParamsI {
  cols: SemanticWIDTHS;
  padded: string | boolean;
}

const MAX_WIDTH_ONE_COLUMN = 500;

const onResponsiveUpdate = (
  gridParams: GridParamsI,
  setGridParams: Function
) => {
  const maxWidth = Responsive.onlyMobile.maxWidth;
  const padded = window.innerWidth <= (maxWidth || 0) ? "vertically" : false;

  const cols = window.innerWidth <= MAX_WIDTH_ONE_COLUMN ? "1" : "2";

  setGridParams({ ...gridParams, padded, cols });
};

const dOnUpdate = debounce(onResponsiveUpdate, 500);

const defaultPadded =
  window.innerWidth <= (Responsive.onlyMobile.maxWidth || 0)
    ? "vertically"
    : false;

const getProducts = (state: AppState) => state.products;

const ProductList: React.FC = () => {
  const products = useSelector(getProducts, shallowEqual);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const [gridParams, setGridParams] = useState<GridParamsI>({
    cols: "2",
    padded: defaultPadded
  });

  const columns = renderListItems(products);

  return (
    <Responsive
      as={Grid}
      padded={gridParams.padded}
      onUpdate={dOnUpdate.bind(null, gridParams, setGridParams)}
    >
      <Grid.Row columns={gridParams.cols}>{columns}</Grid.Row>
    </Responsive>
  );
};

export default ProductList;
