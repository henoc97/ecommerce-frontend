import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ICart from "@/domain/entities/cart.entity";
import { CartState } from "../types/state.types";

const initialState: CartState = {
  loading: false,
  error: null,
  carts: [],
};

const cartSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    fetchCartsRequest(state) {
      state.loading = true;
      state.error = null;
    },
    fetchCartsSuccess(state, action: PayloadAction<ICart[]>) {
      state.loading = false;
      state.carts = action.payload;
    },
    fetchCartsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    addCart(state, action: PayloadAction<ICart>) {
      state.loading = false;
      state.carts.push(action.payload);
    },
    deleteCart(state, action: PayloadAction<number>) {
      state.loading = false;
      state.carts = state.carts.filter((cart) => cart.id !== action.payload);
    },
    updateCart(state, action: PayloadAction<ICart>) {
      state.loading = false;
      const index = state.carts.findIndex((cart) => cart.id === action.payload.id);
      if (index !== -1) {
        state.carts[index] = action.payload;
      }
    },
  },
});

export const {
  fetchCartsRequest,
  fetchCartsSuccess,
  fetchCartsFailure,
  addCart,
  deleteCart,
  updateCart
} = cartSlice.actions;

export default cartSlice.reducer;
