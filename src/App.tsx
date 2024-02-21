import React, { useState } from "react";
import "./App.css";
import store from "./store/store";
import { Provider, useDispatch } from "react-redux";
import Products from "./features/products/Products";
import Cart from "./features/cart/Cart";
import Currency from "./features/currency/Currency";
import { FaShoppingCart } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import FavoriteProducts from "./features/favoriteProducts/FavoriteProducts";

function App() {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [isFavoriteVisible, setIsFavoriteVisible] = useState(false);
  return (
    <Provider store={store}>
      <h2 className="text-center font-bold p-3">Products</h2>
      <Currency setIsCartVisible={setIsCartVisible} />
      <Products />
      <hr />
      <FavoriteProducts />
      {isCartVisible ? <Cart setIsCartVisible={setIsCartVisible} /> : <></>}
      <div className="fixed right-0 bottom-0 m-3 flex gap-2">
        <FaShoppingCart
          color="black"
          size={30}
          onClick={() => setIsCartVisible(true)}
        />
      </div>
    </Provider>
  );
}

export default App;
