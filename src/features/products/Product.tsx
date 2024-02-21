import React, { useState } from "react";
import { convertToCurrency, getCurrencySymbol } from "../currency/utils";
import { useDispatch, useSelector } from "react-redux";
import { Action, RootState } from "../types";
import ProductHoverPanel from "./ProductHoverPanel";
import { GrFavorite } from "react-icons/gr";
import {
  addProduct,
  removeProduct,
} from "../favoriteProducts/favoriteProductsSlice";
import { Product as ProductType } from "./types";
import { Dispatch } from "redux";
import { MdFavorite } from "react-icons/md";

const Product = ({ product }: any) => {
  const dispatch: Dispatch<Action> = useDispatch();
  const [isHovered, setIsHovered] = useState(false);
  const currency = useSelector((state: RootState) => state.currency);
  const convertedCurrency = convertToCurrency(product.price, currency);
  const favoriteProducts = useSelector(
    (state: RootState) => state.favoriteProducts,
  );
  const handleAddProductToFavorite = (product: ProductType) => {
    dispatch(addProduct(product));
  };
  const handleRemoveProductFromFavorite = (product: ProductType) => {
    dispatch(removeProduct(product));
  };
  const checkIfProductIsInFavorites = (product: ProductType) => {
    return favoriteProducts.find(
      (favProd: ProductType) => favProd.id === product.id,
    );
  };
  return (
    <li
      className="max-w-[15rem] flex flex-col items-center gap-2 cursor-pointer bg-gray-100 relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={product.image} alt={product.name} className="bg-cover" />
      <span className="font-bold">{product.name}</span>
      <span>
        {convertedCurrency}
        {getCurrencySymbol(currency)}
      </span>
      {isHovered && (
        <>
          {checkIfProductIsInFavorites(product) ? (
            <MdFavorite
              color="red"
              size={20}
              className="absolute top-0 right-0 m-2"
              onClick={() => handleRemoveProductFromFavorite(product)}
            />
          ) : (
            <GrFavorite
              color="black"
              size={20}
              className="absolute top-0 right-0 m-2"
              onClick={() => handleAddProductToFavorite(product)}
            />
          )}
          <ProductHoverPanel product={product} />
        </>
      )}
    </li>
  );
};

export default Product;
