import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import INewsletterSubscription from "@/domain/entities/newslettersubscription.entity";
import { NewsletterSubscriptionState } from "../types/state.types";

const initialState: NewsletterSubscriptionState = {
  loading: false,
  error: null,
  newslettersubscriptions: [],
};

const newslettersubscriptionSlice = createSlice({
  name: "newslettersubscriptions",
  initialState,
  reducers: {
    fetchNewsletterSubscriptionsRequest(state) {
      state.loading = true;
      state.error = null;
    },
    fetchNewsletterSubscriptionsSuccess(state, action: PayloadAction<INewsletterSubscription[]>) {
      state.loading = false;
      state.newslettersubscriptions = action.payload;
    },
    fetchNewsletterSubscriptionsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    addNewsletterSubscription(state, action: PayloadAction<INewsletterSubscription>) {
      state.newslettersubscriptions.push(action.payload);
    },
    deleteNewsletterSubscription(state, action: PayloadAction<number>) {
      state.newslettersubscriptions = state.newslettersubscriptions.filter((newslettersubscription) => newslettersubscription.id !== action.payload);
    },
    updateNewsletterSubscription(state, action: PayloadAction<INewsletterSubscription>) {
      const index = state.newslettersubscriptions.findIndex((newslettersubscription) => newslettersubscription.id === action.payload.id);
      if (index !== -1) {
        state.newslettersubscriptions[index] = action.payload;
      }
    },
  },
});

export const {
  fetchNewsletterSubscriptionsRequest,
  fetchNewsletterSubscriptionsSuccess,
  fetchNewsletterSubscriptionsFailure,
  addNewsletterSubscription,
  deleteNewsletterSubscription,
  updateNewsletterSubscription
} = newslettersubscriptionSlice.actions;

export default newslettersubscriptionSlice.reducer;
