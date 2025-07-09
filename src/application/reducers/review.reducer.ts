import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import IReview from "@/domain/entities/review.entity";
import { ReviewState } from "../types/state.types";

const initialState: ReviewState = {
  loading: false,
  error: null,
  reviews: [],
};

const reviewSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    fetchReviewsRequest(state) {
      state.loading = true;
      state.error = null;
    },
    fetchReviewsSuccess(state, action: PayloadAction<IReview[]>) {
      state.loading = false;
      state.reviews = action.payload;
    },
    fetchReviewsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    addReview(state, action: PayloadAction<IReview>) {
      state.reviews.push(action.payload);
    },
    deleteReview(state, action: PayloadAction<number>) {
      state.reviews = state.reviews.filter((review) => review.id !== action.payload);
    },
    updateReview(state, action: PayloadAction<IReview>) {
      const index = state.reviews.findIndex((review) => review.id === action.payload.id);
      if (index !== -1) {
        state.reviews[index] = action.payload;
      }
    },
  },
});

export const {
  fetchReviewsRequest,
  fetchReviewsSuccess,
  fetchReviewsFailure,
  addReview,
  deleteReview,
  updateReview
} = reviewSlice.actions;

export default reviewSlice.reducer;
