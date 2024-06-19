import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "..";
import { ICartState } from "./cart.slice";

const selectCartState: (state: RootState) => ICartState = (state) =>
  state.cartState;

const selectTotalPrice = createSelector(
  selectCartState,
  (state) => state.totalPrice
);

const selectItems = createSelector(selectCartState, (state) => state.items);

const selectTotalItemsCount = createSelector(selectItems, (items) =>
  items.reduce((total, item) => total + item.quantity, 0)
);

export const cartSelectors = {
  selectTotalPrice,
  selectItems,
  selectTotalItemsCount,
};
