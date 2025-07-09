import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import IPayment from "@/domain/entities/payment.entity";
import { PaymentState } from "../types/state.types";

const initialState: PaymentState = {
  loading: false,
  error: null,
  payments: [],
};

const paymentSlice = createSlice({
  name: "payments",
  initialState,
  reducers: {
    fetchPaymentsRequest(state) {
      state.loading = true;
      state.error = null;
    },
    fetchPaymentsSuccess(state, action: PayloadAction<IPayment[]>) {
      state.loading = false;
      state.payments = action.payload;
    },
    fetchPaymentsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    addPayment(state, action: PayloadAction<IPayment>) {
      state.loading = false;
      state.payments.push(action.payload);
    },
    deletePayment(state, action: PayloadAction<number>) {
      state.loading = false;
      state.payments = state.payments.filter((payment) => payment.id !== action.payload);
    },
    updatePayment(state, action: PayloadAction<IPayment>) {
      state.loading = false;
      const index = state.payments.findIndex((payment) => payment.id === action.payload.id);
      if (index !== -1) {
        state.payments[index] = action.payload;
      }
    },
  },
});

export const {
  fetchPaymentsRequest,
  fetchPaymentsSuccess,
  fetchPaymentsFailure,
  addPayment,
  deletePayment,
  updatePayment
} = paymentSlice.actions;

export default paymentSlice.reducer;
