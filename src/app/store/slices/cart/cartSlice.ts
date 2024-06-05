import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CartItem, CartSliceState } from "./types";

const calcTotalPrice = (items: CartItem[]) => {
  return items.reduce((sum, obj) => obj.price * obj.count + sum, 0);
};

const getCartFromLS = () => {
  const data = localStorage.getItem("cart");
  const items = data ? JSON.parse(data) : [];
  const totalPrice = calcTotalPrice(items);

  return {
    items: items as CartItem[],
    totalPrice,
  };
};

const initialState: CartSliceState = getCartFromLS();

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItem>) {
      const itemInCart = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.totalPrice = state.items.reduce(
        (sum, item) => item.price * item.quantity + sum,
        0
      );
    },
    removeItem(state, action) {
      const removeItem = state.items.filter(
        (item) => item.id !== action.payload
      );
      const removeQantityPrice = state.items.find(
        (item) => item.id === action.payload
      );
      if (removeQantityPrice)
        state.totalPrice -=
          removeQantityPrice.price * removeQantityPrice.quantity;
      state.items = removeItem;
    },
    minusItem(state, action) {
      const findItem = state.items.find((item) => item.id === action.payload);
      if (findItem)
        if (findItem.quantity === 1) {
          findItem.quantity = 1;
        } else {
          findItem.quantity--;
          state.totalPrice -= findItem?.price;
        }
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItem, removeItem, clearItems, minusItem } = cartSlice.actions;

export default cartSlice.reducer;
