import React, { useEffect } from "react";
import { Dispatch } from "redux";
import { Action, RootState } from "../types";
import { useDispatch, useSelector } from "react-redux";
import { FaWindowClose } from "react-icons/fa";
import CartItemComponent from "./CartItemComponent";
import { CartItem } from "./types";
import { convertToCurrency, getCurrencySymbol } from "../currency/utils";

const Cart = ({ setIsCartVisible }: any) => {
  const currency = useSelector((state: RootState) => state.currency);
  const currencySymbol = getCurrencySymbol(currency);
  const dispatch: Dispatch<Action> = useDispatch();
  const cart = useSelector((state: RootState) => state.cart);
  const totalPrice: number = Number(convertToCurrency(cart.total, currency));
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-1">
      <FaWindowClose
        className="absolute top-0 right-0 z-2 cursor-pointer"
        color="black"
        size={30}
        onClick={() => setIsCartVisible(false)}
      />
      <div className="card card-registration card-registration-2">
        <div className="card-body p-0">
          <div className="row g-0">
            <div className="col-lg-8">
              <div className="p-10">
                <div className="d-flex justify-content-between align-items-center mb-5">
                  <h1 className="fw-bold mb-0 text-black">Shopping Cart</h1>
                  <h6 className="mb-0 text-muted">{cart.items.length} items</h6>
                </div>
                {cart.items.map((item: CartItem, id: number) => (
                  <div key={id}>
                    <hr className="my-4" />
                    <CartItemComponent item={item} currency={currency} />
                  </div>
                ))}
                <hr className="my-4" />

                <div className="pt-5">
                  <h6 className="mb-0">
                    <button
                      type="button"
                      className="text-body underline"
                      onClick={() => setIsCartVisible(false)}
                    >
                      <i className="fas fa-long-arrow-alt-left me-2"></i>
                      Back to shop
                    </button>
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 bg-grey">
              <div className="p-5">
                <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                <hr className="my-4" />

                <div className="d-flex justify-content-between mb-4">
                  <h5 className="text-uppercase">items {cart.items.length}</h5>
                  <h5>
                    {totalPrice}&nbsp;
                    {currencySymbol}
                  </h5>
                </div>

                <h5 className="text-uppercase mb-3">Shipping</h5>

                <div className="mb-4 pb-2">
                  <select className="select">
                    <option value="1">Standard-Delivery- €5.00</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="4">Four</option>
                  </select>
                </div>

                <h5 className="text-uppercase mb-3">Give code</h5>

                <div className="mb-5">
                  <div className="form-outline">
                    <input
                      type="text"
                      id="form3Examplea2"
                      className="form-control form-control-lg"
                    />
                    <label className="form-label" htmlFor="form3Examplea2">
                      Enter your code
                    </label>
                  </div>
                </div>

                <hr className="my-4" />

                <div className="d-flex justify-content-between mb-5">
                  <h5 className="text-uppercase">Total price</h5>
                  <h5>
                    {totalPrice}&nbsp; {currencySymbol}{" "}
                  </h5>
                </div>

                <button
                  type="button"
                  className="btn btn-dark btn-block btn-lg"
                  data-mdb-ripple-color="dark"
                >
                  Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
