// action creators
import { ActionCreator, Reducer } from "../types";
import { Products } from "./types";
import { fetchProducts } from "./api";

export const fetchAllProducts: ActionCreator = () => {
  return {
    type: "products/fetchAllProducts",
  };
};

const initialProductsState: Products = [];
export const productsReducer: Reducer = (
  state = initialProductsState,
  action,
) => {
  switch (action.type) {
    case "products/fetchAllProducts": {
      return fetchProducts();
    }
    default: {
      return state;
    }
  }
};
