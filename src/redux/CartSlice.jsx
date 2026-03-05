import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const item = state.find(i => i.id === action.payload.id);
      if (item) {
        item.quantity++;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },

    increment: (state, action) => {
      const item = state.find(i => i.id === action.payload);
      if (item) item.quantity++;
    },

    decrement: (state, action) => {
      const item = state.find(i => i.id === action.payload);
      if (item && item.quantity > 1) item.quantity--;
    },

    removeItem: (state, action) => {
      return state.filter(i => i.id !== action.payload);
    }
  }
});

export const { addToCart, increment, decrement, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
