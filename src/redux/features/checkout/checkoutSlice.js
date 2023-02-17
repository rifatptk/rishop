import { createSlice } from "@reduxjs/toolkit";

const checkoutSlice = createSlice({
  name: "checkout",
  initialState: {
    orderInfo: null,
    items: [],
  },
  reducers: {
    addOrderInfo: (state, action) => {
      const info = action.payload;
      state.orderInfo = info;
    },
    addItemsToCheckout: (state, action) => {
      const items = action.payload;
      state.items = items;
    },
    clearCheckout: (state) => {
      state.items = [];
      state.Info = null;
    },
  },
});

export const { addOrderInfo, addItemsToCheckout, clearCheckout } =
  checkoutSlice.actions;

export default checkoutSlice.reducer;
