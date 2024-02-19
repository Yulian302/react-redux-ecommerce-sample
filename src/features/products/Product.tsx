import React, { useState } from "react";
import { convertToCurrency, getCurrencySymbol } from "../currency/utils";
import { useSelector } from "react-redux";
import { RootState } from "../types";
import ProductHoverPanel from "./ProductHoverPanel";

const Product = ({ product, id }: any) => {
  const [isHovered, setIsHovered] = useState(false);
  const currency = useSelector((state: RootState) => state.currency);
  const convertedCurrency = convertToCurrency(product.price, currency);
  return (
    <li
      key={id}
      className="max-w-[15rem] flex flex-col items-center gap-2 cursor-pointer bg-gray-100 p-3 relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={product.image} alt={product.name} className="bg-cover" />
      <span className="font-bold">{product.name}</span>
      <span>
        {convertedCurrency}
        {getCurrencySymbol(currency)}
      </span>
      {isHovered && <ProductHoverPanel product={product} />}
    </li>
  );
};

export default Product;
