import { configureStore } from "@reduxjs/toolkit";
import filter from "./slices/filter/filterSlice";
import cart from "./slices/cart/cartSlice";
import pizza from "./slices/pizza/pizzaSlice";

const store = configureStore({
  reducer: {
    filter,
    cart,
    pizza,
  },
});

export type RootStateBase = ReturnType<typeof store.getState>;

export default store;
