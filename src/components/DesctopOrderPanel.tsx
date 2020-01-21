import React, { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { Header, Segment } from "semantic-ui-react";
import OrderSummaryForm from "./OrderSummaryForm";
import { AppState } from "../reducers";
import { getSessionOrder } from "../actions";

const getSessionOrderSelector = (state: AppState) => state.orderItems;

const DesctopOrderPanel: React.FC = () => {
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
    <div>
      <Header as="h2" attached="top">
        My order
      </Header>
      {(() => {
        if (orderItems.length > 0) {
          return (
            <Segment attached>
              <OrderSummaryForm
                orderItems={orderItems}
                initialData={initialData}
              />
            </Segment>
          );
        }
      })()}
    </div>
  );
};

export default DesctopOrderPanel;
