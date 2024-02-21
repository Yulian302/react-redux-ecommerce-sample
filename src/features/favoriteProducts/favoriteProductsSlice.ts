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

export const clearAllFavorites: ActionCreator = (product: Product) => {
  return {
    type: "favoriteProducts/clearAllFavorites",
  };
};
const initialFavoriteProductsState: Products = [];
export const favoriteProductsReducer: Reducer = (
  state = initialFavoriteProductsState,
  action,
) => {
  switch (action.type) {
    case "favoriteProducts/addProduct": {
      const existingProduct = state.find(
        (product: Product) => product.id === action.payload.id,
      );
      if (existingProduct) {
        return state;
      } else {
        return state.concat(action.payload);
      }
    }
    case "favoriteProducts/removeProduct": {
      return state.filter(
        (product: Product) => product.id !== action.payload.id,
      );
    }
    case "favoriteProducts/clearAllFavorites": {
      return [];
    }
    default: {
      return state;
    }
  }
};
