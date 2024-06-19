import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { filterReducer } from "./filter/filter.slice";
import { cartReducer } from "./cart/cart.slice";
import { pizzaReducer } from "./pizzas/pizza.slice";

export const store = configureStore({
  reducer: {
    filterState: filterReducer,
    cartState: cartReducer,
    pizzaState: pizzaReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
