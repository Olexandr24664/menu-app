import { Dispatch } from "redux";
import api from "./api";
import { EReduxActionTypes, IReduxBaseAction } from "./types";
import { OrderItemI, OrderDetails } from "../interfaces/OrderI";

export interface GetSessionOrderAction extends IReduxBaseAction {
  type: EReduxActionTypes.GET_SESSION_ORDER;
  payload: OrderItemI[];
}

export interface AddOrderItemAction extends IReduxBaseAction {
  type: EReduxActionTypes.ADD_ORDER_ITEM;
  payload: OrderItemI[];
}

export interface CompleteOrderAction extends IReduxBaseAction {
  type: EReduxActionTypes.COMPLETE_ORDER;
}

export interface GetOrderDetailsAction extends IReduxBaseAction {
  type: EReduxActionTypes.GET_ORDER_DETAILS;
  payload: OrderDetails;
}

export const getSessionOrder = () => async (
  dispatch: Dispatch<GetSessionOrderAction>
) => {
  const orderItems: OrderItemI[] = [
    {
      id: "1",
      name: "Meat better",
      quantity: 2,
      price: 15,
      price_discount: 0
    },
    {
      id: "2",
      name: "Meat worst",
      quantity: 5,
      price: 11,
      price_discount: 0
    },
    {
      id: "3",
      name: "Meat bb",
      quantity: 1,
      price: 24,
      price_discount: 13
    }
  ];

  //   const response = await api.get<OrderItemI[]>("/order/sessionOrder");

  //   const orderItems = response.data;

  dispatch<GetSessionOrderAction>({
    type: EReduxActionTypes.GET_SESSION_ORDER,
    payload: orderItems
  });
};

export const addOrderItem = (
  productId: string,
  quantity: number,
  callback: (errorMsg?: string) => void
) => async (dispatch: Dispatch) => {
  try {
    const response = await api.post<OrderItemI[]>("/order", {
      productId,
      quantity
    });

    const orderItems = response.data;

    dispatch<AddOrderItemAction>({
      type: EReduxActionTypes.ADD_ORDER_ITEM,
      payload: orderItems
    });
    callback();
  } catch (error) {
    callback(error.message);
  }
};

export const completeOrder = (
  orderInfo: {
    table: number;
    email?: string;
  },
  callback: (orderDetails: OrderDetails | null, errorMsg?: string) => void
) => async (dispatch: Dispatch) => {
  try {
    const response = await api.post<OrderDetails>("/order/complete", orderInfo);

    const orderDetails = response.data;

    dispatch<CompleteOrderAction>({
      type: EReduxActionTypes.COMPLETE_ORDER
    });

    callback(orderDetails);
  } catch (error) {
    callback(null, error.message);
  }
};

export const getOrderDetails = async (orderId: string) => {
  const response = await api.get<OrderDetails>(`/order/details/${orderId}`);

  const orderDetails = response.data;

  return orderDetails;
};
