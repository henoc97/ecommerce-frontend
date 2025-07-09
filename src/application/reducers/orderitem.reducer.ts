import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import IOrderItem from "@/domain/entities/orderItem.entity";
import { OrderItemState } from "../types/state.types";

const initialState: OrderItemState = {
  loading: false,
  error: null,
  orderitems: [],
};

const orderitemSlice = createSlice({
  name: "orderitems",
  initialState,
  reducers: {
    fetchOrderItemsRequest(state) {
      state.loading = true;
      state.error = null;
    },
    fetchOrderItemsSuccess(state, action: PayloadAction<IOrderItem[]>) {
      state.loading = false;
      state.orderitems = action.payload;
    },
    fetchOrderItemsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    addOrderItem(state, action: PayloadAction<IOrderItem>) {
      state.loading = false;
      state.orderitems.push(action.payload);
    },
    deleteOrderItem(state, action: PayloadAction<number>) {
      state.loading = false;
      state.orderitems = state.orderitems.filter((orderitem) => orderitem.id !== action.payload);
    },
    updateOrderItem(state, action: PayloadAction<IOrderItem>) {
      state.loading = false;
      const index = state.orderitems.findIndex((orderitem) => orderitem.id === action.payload.id);
      if (index !== -1) {
        state.orderitems[index] = action.payload;
      }
    },
  },
});

export const {
  fetchOrderItemsRequest,
  fetchOrderItemsSuccess,
  fetchOrderItemsFailure,
  addOrderItem,
  deleteOrderItem,
  updateOrderItem
} = orderitemSlice.actions;

export default orderitemSlice.reducer;
