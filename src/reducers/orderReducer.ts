import { OrderItemI } from "../interfaces";
import {
  EReduxActionTypes,
  GetSessionOrderAction,
  GetOrderDetailsAction,
  AddOrderItemAction,
  CompleteOrderAction
} from "../actions";

type TOrderReducerActions =
  | GetSessionOrderAction
  | GetOrderDetailsAction
  | AddOrderItemAction
  | CompleteOrderAction;

type TOrderItemsState = OrderItemI[];

const initialState: TOrderItemsState = [];

export const orderReducer = (
  state: TOrderItemsState = initialState,
  action: TOrderReducerActions
) => {
  switch (action.type) {
    case EReduxActionTypes.GET_SESSION_ORDER:
    case EReduxActionTypes.ADD_ORDER_ITEM: {
      return [...action.payload];
    }
    case EReduxActionTypes.COMPLETE_ORDER: {
      return initialState;
    }
    default:
      return state;
  }
};
