import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ISubscription from "@/domain/entities/subscription.entity";
import { SubscriptionState } from "../types/state.types";

const initialState: SubscriptionState = {
  loading: false,
  error: null,
  subscriptions: [],
};

const subscriptionSlice = createSlice({
  name: "subscriptions",
  initialState,
  reducers: {
    fetchSubscriptionsRequest(state) {
      state.loading = true;
      state.error = null;
    },
    fetchSubscriptionsSuccess(state, action: PayloadAction<ISubscription[]>) {
      state.loading = false;
      state.subscriptions = action.payload;
    },
    fetchSubscriptionsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    addSubscription(state, action: PayloadAction<ISubscription>) {
      state.subscriptions.push(action.payload);
    },
    deleteSubscription(state, action: PayloadAction<number>) {
      state.subscriptions = state.subscriptions.filter((subscription) => subscription.id !== action.payload);
    },
    updateSubscription(state, action: PayloadAction<ISubscription>) {
      const index = state.subscriptions.findIndex((subscription) => subscription.id === action.payload.id);
      if (index !== -1) {
        state.subscriptions[index] = action.payload;
      }
    },
  },
});

export const {
  fetchSubscriptionsRequest,
  fetchSubscriptionsSuccess,
  fetchSubscriptionsFailure,
  addSubscription,
  deleteSubscription,
  updateSubscription
} = subscriptionSlice.actions;

export default subscriptionSlice.reducer;
