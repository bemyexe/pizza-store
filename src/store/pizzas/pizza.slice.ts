import { createSlice } from "@reduxjs/toolkit";
import { PizzaItems } from "../../app/services/pizza.service/response/pizza.response";

export interface IPizzaStateProps {
  pizzas: PizzaItems;
}

const PIZZA_SLICE_NAME = "pizza";

const INITIAL_PIZZA_STATE: IPizzaStateProps = {
  pizzas: [],
};

const pizzaSlice = createSlice({
  name: PIZZA_SLICE_NAME,
  initialState: INITIAL_PIZZA_STATE,
  reducers: {
    setPizza(state, action) {
      state.pizzas = action.payload;
    },
  },
});

export const { setPizza } = pizzaSlice.actions;

export const pizzaReducer = pizzaSlice.reducer;
