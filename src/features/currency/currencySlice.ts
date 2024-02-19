// action creators
import { ActionCreator, Reducer } from "../types";

export const setCurrency: ActionCreator = (newCurrency: string) => {
  return {
    type: "currency/setCurrency",
    payload: newCurrency,
  };
};

const initialCartState: Currency = "USD";
export const currencyReducer: Reducer = (state = initialCartState, action) => {
  switch (action.type) {
    case "currency/setCurrency": {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};
