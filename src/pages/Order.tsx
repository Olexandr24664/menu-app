import React, { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { Container, Grid } from "semantic-ui-react";
import OrderSummaryForm from "../components/OrderSummaryForm";
import { getSessionOrder } from "../actions";
import { AppState } from "../reducers";

const getSessionOrderSelector = (state: AppState) => state.orderItems;
const OrderPage = () => {
  const orderItems = useSelector(getSessionOrderSelector, shallowEqual);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSessionOrder());
  }, [dispatch]);

  const initialData = orderItems.reduce<{ [key: string]: any }>(
    (acc, item) => {
      const price = item.price_discount > 0 ? item.price_discount : item.price;
      acc[item.id] = item.quantity;
      acc["total"] += item.quantity * price;
      return acc;
    },
    { total: 0 }
  );

  return (
    <Container
      style={{ marginTop: "7em", marginBottom: "7em", padding: "0 15px" }}
    >
      <Grid centered columns={2}>
        <Grid.Column>
          <OrderSummaryForm
            orderItems={orderItems}
            initialData={initialData}
            key={initialData.total}
          />
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default OrderPage;
