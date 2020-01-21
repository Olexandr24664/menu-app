export enum EReduxActionTypes {
  GET_SESSION_ORDER = "FETCH_ORDER",
  ADD_ORDER_ITEM = "ADD_ORDER_ITEM",
  COMPLETE_ORDER = "COMPLETE_ORDER",
  GET_ORDER_DETAILS = "GET_ORDER_DETAILS",
  FETCH_PRODUCTS = "FETCH_PRODUCTS"
}

export interface IReduxBaseAction {
  type: EReduxActionTypes;
}
