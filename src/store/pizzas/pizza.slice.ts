import { createSlice } from "@reduxjs/toolkit";
import { PizzaItems } from "../../app/services/pizza.service/response/pizza.response";
import { fetchPizzaData } from "./pizza.thunk";

export interface IPizzaStateProps {
  pizzas: PizzaItems;
  status: "loading" | "success" | "error";
}

const PIZZA_SLICE_NAME = "pizza";

const INITIAL_PIZZA_STATE: IPizzaStateProps = {
  pizzas: [],
  status: "loading",
};

const pizzaSlice = createSlice({
  name: PIZZA_SLICE_NAME,
  initialState: INITIAL_PIZZA_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPizzaData.pending, (state) => {
        state.status = "loading";
        state.pizzas = [];
      })
      .addCase(fetchPizzaData.fulfilled, (state, action) => {
        state.status = "success";
        if (action.payload === "Not found") {
          state.pizzas = [];
        } else {
          state.pizzas = action.payload;
        }
      })
      .addCase(fetchPizzaData.rejected, (state) => {
        state.status = "error";
        state.pizzas = [];
      });
  },
});

export const pizzaReducer = pizzaSlice.reducer;
