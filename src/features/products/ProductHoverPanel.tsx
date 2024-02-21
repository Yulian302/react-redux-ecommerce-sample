import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../cart/cartSlice";
import { Product } from "./types";
import { Action, Dispatch } from "redux";

const ProductHoverPanel = ({ product }: { product: Product }) => {
  const dispatch: Dispatch<Action> = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };
  return (
    <div className="absolute w-full h-full flex flex-col justify-center gap-2 bg-gray-100 opacity-90 panel-animation">
      <button className="rounded bg-gray-600 text-white p-2">Details</button>
      <button
        className="rounded bg-green-700 text-white p-2"
        onClick={handleAddToCart}
      >
        Add To Cart
      </button>
    </div>
  );
};

export default ProductHoverPanel;
