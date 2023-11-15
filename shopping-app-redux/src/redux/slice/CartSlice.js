import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  cartSize: 0,
  totalCartAmount: 0,
};

export const CartSlice = createSlice({
  name: "CartSlice",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.products.push(action.payload);
      state.cartSize++;
      state.totalCartAmount += action.payload.price;
    },
    removeFromCart: (state, action) => {
      // id will be passed in the action
      state.products.forEach((product) => {
        if (product.id === action.payload) {
          state.totalCartAmount -= Number(product.price.toFixed(2));
          state.totalCartAmount = Number(state.totalCartAmount.toFixed(2))
        }
      });

      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );

      state.cartSize--;
    },
  },
});

export const { addToCart, removeFromCart } = CartSlice.actions;
export default CartSlice.reducer;
