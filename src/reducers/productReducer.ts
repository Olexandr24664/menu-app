import { ProductI } from "../interfaces";
import { EReduxActionTypes, FetchProductsAction } from "../actions";

type TProductReducerActions = FetchProductsAction;

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
    default:
      return state;
  }
};
