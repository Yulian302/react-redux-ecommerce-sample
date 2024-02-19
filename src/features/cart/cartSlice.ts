// action creators
import { ActionCreator, Reducer } from "../types";
import { Cart, CartItem } from "./types";
import { Product } from "../products/types";

export const addToCart: ActionCreator = (product: Product) => {
  return {
    type: "cart/addToCart",
    payload: product,
  };
};
export const removeFromCart: ActionCreator = (item: CartItem) => {
  return {
    type: "cart/removeFromCart",
    payload: item,
  };
};

export const clearAll: ActionCreator = () => {
  return {
    type: "cart/clearAll",
  };
};

export const changeCartItemQuantity: any = (
  item: CartItem,
  newQuantity: number,
) => {
  return {
    type: "cart/changeCartItemQuantity",
    payload: {
      item: item,
      newQuantity: newQuantity,
    },
  };
};

const initialCartState: Cart = {
  items: [],
  total: 0,
};
export const cartReducer: Reducer = (state = initialCartState, action) => {
  switch (action.type) {
    case "cart/addToCart": {
      const existingItemIndex = state.items.findIndex(
        (item: CartItem) => item.name === action.payload.name,
      );
      if (existingItemIndex !== -1) {
        const updatedItems = state.items.map(
          (item: CartItem, index: number) => {
            if (index === existingItemIndex) {
              return { ...item, quantity: item.quantity + 1 };
            }
            return item;
          },
        );
        return {
          ...state,
          items: updatedItems,
          total: state.total + action.payload.price,
        };
      } else {
        return {
          ...state,
          items: state.items.concat({
            name: action.payload.name,
            price: action.payload.price,
            quantity: 1,
            image: action.payload.image,
            brief_desc: action.payload.brief_desc,
          }),
          total: state.total + action.payload.price,
        };
      }
    }
    case "cart/removeFromCart": {
      const { name, price, quantity } = action.payload;

      const updatedItems = state.items.filter(
        (item: CartItem) => item.name !== name,
      );

      const removedItemsTotal = price * quantity;

      return {
        ...state,
        items: updatedItems,
        total: Number((state.total - removedItemsTotal).toFixed(2)),
      };
    }
    case "cart/clearAll": {
      return {
        total: 0,
      };
    }
    case "cart/changeCartItemQuantity": {
      const { name, price } = action.payload.item;
      const newQuantity = action.payload.newQuantity;

      const updatedItems = state.items.map((item: CartItem) => {
        if (item.name === name) {
          return {
            ...item,
            quantity: newQuantity,
          };
        }
        return item;
      });

      const updatedTotal = updatedItems.reduce(
        (acc: number, item: CartItem) => {
          return acc + item.price * item.quantity;
        },
        0,
      );

      return {
        ...state,
        items: updatedItems,
        total: Number(updatedTotal.toFixed(2)),
      };
    }
    default: {
      return state;
    }
  }
};
