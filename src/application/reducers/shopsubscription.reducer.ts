import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import IShopSubscription from "@/domain/entities/shopSubscription.entity";
import { ShopSubscriptionState } from "../types/state.types";

const initialState: ShopSubscriptionState = {
  loading: false,
  error: null,
  shopSubscriptions: [],
};

const shopsubscriptionSlice = createSlice({
  name: "shopsubscriptions",
  initialState,
  reducers: {
    fetchShopSubscriptionsRequest(state) {
      state.loading = true;
      state.error = null;
    },
    fetchShopSubscriptionsSuccess(state, action: PayloadAction<IShopSubscription[]>) {
      state.loading = false;
      state.shopSubscriptions = action.payload;
    },
    fetchShopSubscriptionsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    addShopSubscription(state, action: PayloadAction<IShopSubscription>) {
      state.loading = false;
      state.shopSubscriptions.push(action.payload);
    },
    deleteShopSubscription(state, action: PayloadAction<number>) {
      state.loading = false;
      state.shopSubscriptions = state.shopSubscriptions.filter((shopsubscription) => shopsubscription.id !== action.payload);
    },
    updateShopSubscription(state, action: PayloadAction<IShopSubscription>) {
      state.loading = false;
      const index = state.shopSubscriptions.findIndex((shopsubscription) => shopsubscription.id === action.payload.id);
      if (index !== -1) {
        state.shopSubscriptions[index] = action.payload;
      }
    },
  },
});

export const {
  fetchShopSubscriptionsRequest,
  fetchShopSubscriptionsSuccess,
  fetchShopSubscriptionsFailure,
  addShopSubscription,
  deleteShopSubscription,
  updateShopSubscription
} = shopsubscriptionSlice.actions;

export default shopsubscriptionSlice.reducer;
