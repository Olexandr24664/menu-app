import { ProductI } from "../interfaces";
import {
  EReduxActionTypes,
  FetchProductsAction,
  FetchProductAction
} from "../actions";

type TProductReducerActions = FetchProductsAction | FetchProductAction;

type TProductsState = ProductI[];

const initialState: TProductsState = [];

export const productReducer = (
  state: TProductsState = initialState,
  action: TProductReducerActions
) => {
  switch (action.type) {
    case EReduxActionTypes.FETCH_PRODUCTS: {
      return [...action.payload];
    }
    case EReduxActionTypes.FETCH_PRODUCT: {
      const filtered = state.filter(p => p.id !== action.payload.id);
      return [...filtered, action.payload];
    }
    default:
      return state;
  }
};
