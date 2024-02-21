import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { Action, RootState } from "../types";
import ProductComponent from "../products/Product";
import { clearAllFavorites } from "./favoriteProductsSlice";

const FavoriteProducts = () => {
  const dispatch: Dispatch<Action> = useDispatch();
  const favoriteProducts = useSelector(
    (state: RootState) => state.favoriteProducts,
  );
  const handleClearAll = () => {
    dispatch(clearAllFavorites());
  };
  return (
    <>
      <div className="flex items-center">
        <div className="flex-grow">
          <h2 className="text-center font-bold p-3">Favorite products</h2>
        </div>
        <button
          className="absolute right-0 btn btn-danger mr-5"
          onClick={handleClearAll}
        >
          Clear all
        </button>
      </div>
      <div className="my-10">
        <ul className="flex justify-start gap-3 flex-wrap">
          {favoriteProducts.map((product: any, id: number) => (
            <ProductComponent product={product} id={id} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default FavoriteProducts;
