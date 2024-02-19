import React from "react";
import { Dispatch } from "redux";
import { Action, RootState } from "../types";
import { useDispatch, useSelector } from "react-redux";
import { setCurrency } from "./currencySlice";
import { FaShoppingCart } from "react-icons/fa";

const Currency = ({ setIsCartVisible }: any) => {
  const dispatch: Dispatch<Action> = useDispatch();
  const currency = useSelector((state: RootState) => state.currency);
  const currencies = ["USD", "EUR", "GBP", "UAH"];
  const handleCurrencyChange = (selectedCurrency: string) => {
    dispatch(setCurrency(selectedCurrency));
  };
  return (
    <div>
      <div className="flex justify-center gap-2 bg-gray-600 [&>*]:text-white [&>*]:px-3 [&>*]:py-2">
        {currencies.map((c) => (
          <div
            key={c}
            className={`cursor-pointer ${currency === c ? "font-bold" : ""}`}
            onClick={() => handleCurrencyChange(c)}
          >
            {c}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Currency;
