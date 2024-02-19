import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "./ProductsSlice";
import { Dispatch } from "redux";
import { Action, RootState } from "../types";
import { addToCart } from "../cart/cartSlice";
import { Product } from "./types";
import ProductComponent from "./Product";

const Products = () => {
  const dispatch: Dispatch<Action> = useDispatch();
  const products = useSelector((state: RootState) => state.products);
  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);
  const handleAddToCartClick = (product: Product) => {
    dispatch(addToCart(product));
  };
  return (
    <div>
      <ul className="flex justify-start gap-3 flex-wrap">
        {products.map((product: any, id: number) => (
          <ProductComponent product={product} id={id} />
        ))}
      </ul>
    </div>
  );
};

export default Products;
