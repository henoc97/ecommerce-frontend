import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import IRefund from "@/domain/entities/refund.entity";
import { RefundState } from "../types/state.types";

const initialState: RefundState = {
  loading: false,
  error: null,
  refunds: [],
};

const refundSlice = createSlice({
  name: "refunds",
  initialState,
  reducers: {
    fetchRefundsRequest(state) {
      state.loading = true;
      state.error = null;
    },
    fetchRefundsSuccess(state, action: PayloadAction<IRefund[]>) {
      state.loading = false;
      state.refunds = action.payload;
    },
    fetchRefundsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    addRefund(state, action: PayloadAction<IRefund>) {
      state.refunds.push(action.payload);
    },
    deleteRefund(state, action: PayloadAction<number>) {
      state.refunds = state.refunds.filter((refund) => refund.id !== action.payload);
    },
    updateRefund(state, action: PayloadAction<IRefund>) {
      const index = state.refunds.findIndex((refund) => refund.id === action.payload.id);
      if (index !== -1) {
        state.refunds[index] = action.payload;
      }
    },
  },
});

export const {
  fetchRefundsRequest,
  fetchRefundsSuccess,
  fetchRefundsFailure,
  addRefund,
  deleteRefund,
  updateRefund
} = refundSlice.actions;

export default refundSlice.reducer;
