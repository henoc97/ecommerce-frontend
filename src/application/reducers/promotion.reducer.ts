import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import IPromotion from "@/domain/entities/promotion.entity";
import { PromotionState } from "../types/state.types";

const initialState: PromotionState = {
  loading: false,
  error: null,
  promotions: [],
};

const promotionSlice = createSlice({
  name: "promotions",
  initialState,
  reducers: {
    fetchPromotionsRequest(state) {
      state.loading = true;
      state.error = null;
    },
    fetchPromotionsSuccess(state, action: PayloadAction<IPromotion[]>) {
      state.loading = false;
      state.promotions = action.payload;
    },
    fetchPromotionsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    addPromotion(state, action: PayloadAction<IPromotion>) {
      state.loading = false;
      state.promotions.push(action.payload);
    },
    deletePromotion(state, action: PayloadAction<number>) {
      state.loading = false;
      state.promotions = state.promotions.filter((promotion) => promotion.id !== action.payload);
    },
    updatePromotion(state, action: PayloadAction<IPromotion>) {
      state.loading = false;
      const index = state.promotions.findIndex((promotion) => promotion.id === action.payload.id);
      if (index !== -1) {
        state.promotions[index] = action.payload;
      }
    },
  },
});

export const {
  fetchPromotionsRequest,
  fetchPromotionsSuccess,
  fetchPromotionsFailure,
  addPromotion,
  deletePromotion,
  updatePromotion
} = promotionSlice.actions;

export default promotionSlice.reducer;
