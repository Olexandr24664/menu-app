import { Dispatch } from "redux";
import { ProductI } from "../interfaces";
import { EReduxActionTypes, IReduxBaseAction } from "./types";
const src = "https://react.semantic-ui.com/images/wireframe/image.png";

export interface FetchProductsAction extends IReduxBaseAction {
  type: EReduxActionTypes.FETCH_PRODUCTS;
  payload: ProductI[];
}

export interface FetchProductAction extends IReduxBaseAction {
  type: EReduxActionTypes.FETCH_PRODUCT;
  payload: ProductI;
}

export const fetchProducts = (categoryId?: string) => async (
  dispatch: Dispatch
) => {
  const productsList: ProductI[] = [
    {
      id: "0",
      name: "Franch meat",
      category: "food,main dish,meat",
      photo: src,
      price: 245,
      price_discount: 100,
      excerpt: "Very delicious franch meat 1998 year",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      rating: 4
    },
    {
      id: "1",
      name: "Franch gogo",
      category: "food,main dish,meat",
      photo: src,
      price: 245,
      price_discount: 0,
      excerpt: "Very delicious franch meat 1998 year",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      rating: 3
    }
  ];
  dispatch<FetchProductsAction>({
    type: EReduxActionTypes.FETCH_PRODUCTS,
    payload: productsList
  });
};

export const fetchProduct = (id: string) => async (dispatch: Dispatch) => {
  const productsList: ProductI[] = [
    {
      id: "0",
      name: "Franch meat",
      category: "food,main dish,meat",
      photo: src,
      price: 245,
      price_discount: 100,
      excerpt: "Very delicious franch meat 1998 year",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      rating: 4
    },
    {
      id: "1",
      name: "Franch gogo",
      category: "food,main dish,meat",
      photo: src,
      price: 245,
      price_discount: 0,
      excerpt: "Very delicious franch meat 1998 year",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      rating: 3
    }
  ];

  const product = productsList.find(p => p.id === id);

  if (product) {
    dispatch<FetchProductAction>({
      type: EReduxActionTypes.FETCH_PRODUCT,
      payload: product
    });
  }
};
