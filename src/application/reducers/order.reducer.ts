import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import IOrder from "@/domain/entities/order.entity";
import { OrderState } from "../types/state.types";

const initialState: OrderState = {
  loading: false,
  error: null,
  orders: [],
};

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    fetchOrdersRequest(state) {
      state.loading = true;
      state.error = null;
    },
    fetchOrdersSuccess(state, action: PayloadAction<IOrder[]>) {
      state.loading = false;
      state.orders = action.payload;
    },
    fetchOrdersFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    addOrder(state, action: PayloadAction<IOrder>) {
      state.orders.push(action.payload);
    },
    deleteOrder(state, action: PayloadAction<number>) {
      state.orders = state.orders.filter((order) => order.id !== action.payload);
    },
    updateOrder(state, action: PayloadAction<IOrder>) {
      const index = state.orders.findIndex((order) => order.id === action.payload.id);
      if (index !== -1) {
        state.orders[index] = action.payload;
      }
    },
  },
});

export const {
  fetchOrdersRequest,
  fetchOrdersSuccess,
  fetchOrdersFailure,
  addOrder,
  deleteOrder,
  updateOrder
} = orderSlice.actions;

export default orderSlice.reducer;
