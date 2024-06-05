import { RootStateBase } from "../../store";
import { CartItem } from "./types";

export const selectCart = (state: RootStateBase) => state.cart;
export const selectCartItems = (state: RootStateBase) => state.cart.items;

export const selectCartItemById = (id: number) => (state: RootStateBase) =>
  state.cart.items.find((item: CartItem) => item.id === id);
