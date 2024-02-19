import React from "react";
import { CartItem } from "./types";
import { convertToCurrency, getCurrencySymbol } from "../currency/utils";
import Currency from "../currency/Currency";
import { IoIosClose } from "react-icons/io";
import { useDispatch } from "react-redux";
import { changeCartItemQuantity, removeFromCart } from "./cartSlice";
import { Action, Dispatch } from "redux";

const CartItemComponent = ({
  item,
  currency,
}: {
  item: CartItem;
  currency: Currency;
}) => {
  const currencySymbol = getCurrencySymbol(currency);

  const dispatch: Dispatch<Action> = useDispatch();
  const totalPriceForItemType = Number(
    Number(item.price * item.quantity).toFixed(2),
  );
  const handleRemoveItemFromCart = (item: CartItem) => {
    dispatch(removeFromCart(item));
  };
  const handleCartItemQuantityChange = (
    item: CartItem,
    newQuantity: number,
  ) => {
    newQuantity = Math.max(1, newQuantity);
    dispatch(changeCartItemQuantity(item, Number(newQuantity)));
  };
  return (
    <div className="row mb-4 d-flex justify-content-between align-items-center">
      <div className="col-md-2 col-lg-2 col-xl-2">
        <img src={item.image} className="img-fluid rounded-3" alt={item.name} />
      </div>
      <div className="col-md-3 col-lg-3 col-xl-3">
        <h6 className="text-muted">{item.name}</h6>
        <h6 className="text-black mb-0">{item.brief_desc}</h6>
      </div>
      <div className="col-md-3 col-lg-3 col-xl-3 d-flex">
        <button className="btn btn-link px-2">
          <i className="fas fa-minus"></i>
        </button>

        <input
          min={1}
          defaultValue={item.quantity}
          type="number"
          className="form-control form-control-sm"
          onChange={(e: any) =>
            handleCartItemQuantityChange(item, e.target.value)
          }
        />

        <button className="btn btn-link px-2">
          <i className="fas fa-plus"></i>
        </button>
      </div>
      <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
        <h6 className="mb-0">
          {totalPriceForItemType}&nbsp;{currencySymbol}
        </h6>
      </div>
      <div className="col-md-1 col-lg-1 col-xl-1 text-end">
        <IoIosClose size={20} onClick={() => handleRemoveItemFromCart(item)} />
      </div>
    </div>
  );
};

export default CartItemComponent;
