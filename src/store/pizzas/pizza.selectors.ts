import { RootState } from "..";
import { IPizzaStateProps } from "./pizza.slice";
import { createSelector } from "@reduxjs/toolkit";

const selectPizzaState: (state: RootState) => IPizzaStateProps = (state) =>
  state.pizzaState;

const selectPizza = createSelector(selectPizzaState, (state) => state.pizzas);
const selectPizzaStatus = createSelector(
  selectPizzaState,
  (state) => state.status
);

export const pizzaSelectors = {
  selectPizza,
  selectPizzaStatus,
};
