import { createStore, combineReducers } from "redux";
import { favoriteProductsReducer } from "../features/favoriteProducts/favoriteProductsSlice";
import { productsReducer } from "../features/products/ProductsSlice";
import { cartReducer } from "../features/cart/cartSlice";
import { currencyReducer } from "../features/currency/currencySlice";

const rootReducer = combineReducers({
  favoriteProducts: favoriteProductsReducer,
  products: productsReducer,
  cart: cartReducer,
  currency: currencyReducer,
});

const store = createStore(rootReducer);

export default store;
