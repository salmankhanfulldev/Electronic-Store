import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  item: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.item.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.item.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.item = state.item.filter((item) => item.id !== action.payload);
    },
    updateQuantity: (state, action) => {
      const item = state.item.find((item) => item.id === action.payload.id);
      if (item) {
        if (action.payload.quantity < 1) {
          state.item = state.item.filter(
            (cartItem) => cartItem.id !== action.payload.id
          );
        } else {
          item.quantity = action.payload.quantity;
        }
      }
    },
    clearCart: (state) => {
      state.item = [];
    },
  },
});
export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
