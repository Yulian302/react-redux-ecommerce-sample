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
    <div className="flex justify-center">
      <button className="rounded bg-gray-600 text-white p-2 mr-2">
        Details
      </button>
      <button
        className="rounded bg-green-700 text-white p-2 ml-2"
        onClick={handleAddToCart}
      >
        Add To Cart
      </button>
    </div>
  );
};

export default ProductHoverPanel;
