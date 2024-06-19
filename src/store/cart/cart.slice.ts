import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from "../../@types/cart-types";

const CART_SLICE_NAME = "cart";

export interface ICartState {
  totalPrice: number;
  items: CartItem[];
}

const INITIAL_CART_STATE: ICartState = {
  totalPrice: 0,
  items: [],
};

export function generateCartItemKey(item: CartItem): string {
  return `${item.id}-${item.size}-${item.type}`;
}

const cartSlice = createSlice({
  name: CART_SLICE_NAME,
  initialState: INITIAL_CART_STATE,
  reducers: {
    addItemToCart(state, action: PayloadAction<CartItem>) {
      const newItem = action.payload;
      const newItemKey = generateCartItemKey(newItem);
      const existingItem = state.items.find(
        (item) => generateCartItemKey(item) === newItemKey
      );
      if (existingItem) {
        existingItem.quantity += newItem.quantity;
      } else {
        state.items.push(newItem);
      }
      state.totalPrice += newItem.price * newItem.quantity;
    },

    removeItemFromCart(state, action: PayloadAction<string>) {
      const idToRemove = action.payload;
      const existingItemIndex = state.items.findIndex(
        (item) => generateCartItemKey(item) === idToRemove
      );

      if (existingItemIndex !== -1) {
        const removedItem = state.items[existingItemIndex];
        state.totalPrice -= removedItem.price * removedItem.quantity;
        state.items.splice(existingItemIndex, 1);
      }
    },

    increaseItemQuantity(state, action: PayloadAction<string>) {
      const idToIncrease = action.payload;
      const itemToIncrease = state.items.find(
        (item) => generateCartItemKey(item) === idToIncrease
      );

      if (itemToIncrease) {
        itemToIncrease.quantity++;
        state.totalPrice += itemToIncrease.price;
      }
    },

    decreaseItemQuantity(state, action: PayloadAction<string>) {
      const idToDecrease = action.payload;
      const itemToDecrease = state.items.find(
        (item) => generateCartItemKey(item) === idToDecrease
      );

      if (itemToDecrease && itemToDecrease.quantity > 1) {
        itemToDecrease.quantity--;
        state.totalPrice -= itemToDecrease.price;
      }
    },

    clearCart(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
