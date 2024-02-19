import { Product, Products } from "./products/types";

interface Action {
  type: string;
  payload?: any;
}

type ActionCreator = (payload?: any) => Action;

type Reducer = (state: any, action: Action) => any;

type RootState = {
  products: Products;
  favoriteProducts: Products;
  cart: Cart;
  currency: Currency;
};

export { Action, ActionCreator, Reducer, RootState };
