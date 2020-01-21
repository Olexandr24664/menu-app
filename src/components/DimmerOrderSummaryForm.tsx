import React, { useState, Suspense, lazy, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { Button, Dimmer, Header, Icon } from "semantic-ui-react";
import OrderSummaryForm from "./OrderSummaryForm";
import { getSessionOrder } from "../actions";
import { AppState } from "../reducers";

const getSessionOrderSelector = (state: AppState) => state.orderItems;
// const DimmerContent:React.FC = () => {
//     return <OrderSummaryForm />;
// }

const DimmerOrderSummaryForm: React.FC = () => {
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

  const [active, setActive] = useState(false);

  const handleOpen = () => setActive(true);
  const handleClose = () => setActive(false);

  return (
    <div>
      <Button
        content="Show"
        icon="plus"
        labelPosition="left"
        onClick={handleOpen}
      />

      <Dimmer active={active} onClickOutside={handleClose} page></Dimmer>
    </div>
  );
};

export default DimmerOrderSummaryForm;
