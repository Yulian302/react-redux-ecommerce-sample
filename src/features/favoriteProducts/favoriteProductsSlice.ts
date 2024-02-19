// action creators
import { ActionCreator, Reducer } from "../types";
import { Product, Products } from "../products/types";

export const addProduct: ActionCreator = (product: Product) => {
  return {
    type: "favoriteProducts/addProduct",
    payload: product,
  };
};
export const removeProduct: ActionCreator = (product: Product) => {
  return {
    type: "favoriteProducts/removeProduct",
    payload: product,
  };
};

export const clearAll: ActionCreator = (product: Product) => {
  return {
    type: "favoriteProducts/clearAll",
  };
};
const initialFavoriteProductsState: Products = [];
export const favoriteProductsReducer: Reducer = (
  state = initialFavoriteProductsState,
  action,
) => {
  switch (action.type) {
    case "favoriteProducts/addProduct": {
      return state.concat(action.payload);
    }
    case "favoriteProducts/removeProduct": {
      return state.filter(
        (product: Product) => product.id !== action.payload.id,
      );
    }
    case "favoriteProducts/clearAll": {
      return [];
    }
    default: {
      return state;
    }
  }
};
