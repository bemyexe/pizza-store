import { RootState } from "..";
import { IPizzaStateProps } from "./pizza.slice";
import { createSelector } from "@reduxjs/toolkit";

const selectPizzaState: (state: RootState) => IPizzaStateProps = (state) =>
  state.pizzaState;

const selectPizza = createSelector(selectPizzaState, (state) => state.pizzas);

export const pizzaSelectors = {
  selectPizza,
};
