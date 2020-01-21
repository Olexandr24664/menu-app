import { combineReducers } from "redux";
import { orderReducer } from "./orderReducer";
import { productReducer } from "./productReducer";

export const rootReducer = combineReducers({
  orderItems: orderReducer,
  products: productReducer
});

export type AppState = ReturnType<typeof rootReducer>;
