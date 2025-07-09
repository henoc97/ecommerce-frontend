import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import IShop from "@/domain/entities/shop.entity";
import { ShopState } from "../types/state.types";

const initialState: ShopState = {
  loading: false,
  error: null,
  shops: [],
};

const shopSlice = createSlice({
  name: "shops",
  initialState,
  reducers: {
    fetchShopsRequest(state) {
      state.loading = true;
      state.error = null;
    },
    fetchShopsSuccess(state, action: PayloadAction<IShop[]>) {
      state.loading = false;
      state.shops = action.payload;
    },
    fetchShopsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    addShop(state, action: PayloadAction<IShop>) {
      state.shops.push(action.payload);
    },
    deleteShop(state, action: PayloadAction<number>) {
      state.shops = state.shops.filter((shop) => shop.id !== action.payload);
    },
    updateShop(state, action: PayloadAction<IShop>) {
      const index = state.shops.findIndex((shop) => shop.id === action.payload.id);
      if (index !== -1) {
        state.shops[index] = action.payload;
      }
    },
  },
});

export const {
  fetchShopsRequest,
  fetchShopsSuccess,
  fetchShopsFailure,
  addShop,
  deleteShop,
  updateShop
} = shopSlice.actions;

export default shopSlice.reducer;
