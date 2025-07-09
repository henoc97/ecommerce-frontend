import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ICartItem from "@/domain/entities/cartItem.entity";
import { CartItemState } from "../types/state.types";

const initialState: CartItemState = {
  loading: false,
  error: null,
  cartitems: [],
};

const cartitemSlice = createSlice({
  name: "cartitems",
  initialState,
  reducers: {
    fetchCartItemsRequest(state) {
      state.loading = true;
      state.error = null;
    },
    fetchCartItemsSuccess(state, action: PayloadAction<ICartItem[]>) {
      state.loading = false;
      state.cartitems = action.payload;
    },
    fetchCartItemsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    addCartItem(state, action: PayloadAction<ICartItem>) {
      state.cartitems.push(action.payload);
    },
    deleteCartItem(state, action: PayloadAction<number>) {
      state.cartitems = state.cartitems.filter((cartitem) => cartitem.id !== action.payload);
    },
    updateCartItem(state, action: PayloadAction<ICartItem>) {
      const index = state.cartitems.findIndex((cartitem) => cartitem.id === action.payload.id);
      if (index !== -1) {
        state.cartitems[index] = action.payload;
      }
    },
  },
});

export const {
  fetchCartItemsRequest,
  fetchCartItemsSuccess,
  fetchCartItemsFailure,
  addCartItem,
  deleteCartItem,
  updateCartItem
} = cartitemSlice.actions;

export default cartitemSlice.reducer;
