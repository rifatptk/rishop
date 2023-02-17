import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    isOpen: false,
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.id === item.id);
      if (existingItem) {
        return;
      } else {
        state.items.push(item);
      }
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((i) => i.id !== id);
    },
    incrementQuantity: (state, action) => {
      const { productId } = action.payload;
      const productIndex = state.items.findIndex(
        (product) => product.id === productId
      );
      if (productIndex !== -1) {
        state.items[productIndex].quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const { productId } = action.payload;
      const productIndex = state.items.findIndex(
        (product) => product.id === productId
      );
      if (productIndex !== -1) {
        state.items[productIndex].quantity -= 1;
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
    toggleCart: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  clearCart,
  toggleCart,
} = cartSlice.actions;

export default cartSlice.reducer;
