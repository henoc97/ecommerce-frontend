import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import IAddress from "@/domain/entities/address.entity";
import { AddressState } from "../types/state.types";

const initialState: AddressState = {
  loading: false,
  error: null,
  addresses: [],
};

const addressSlice = createSlice({
  name: "addresss",
  initialState,
  reducers: {
    fetchAddresssRequest(state) {
      state.loading = true;
      state.error = null;
    },
    fetchAddresssSuccess(state, action: PayloadAction<IAddress[]>) {
      state.loading = false;
      state.addresses = action.payload;
    },
    fetchAddresssFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    addAddress(state, action: PayloadAction<IAddress>) {
      state.addresses.push(action.payload);
    },
    deleteAddress(state, action: PayloadAction<number>) {
      state.addresses = state.addresses.filter((address) => address.id !== action.payload);
    },
    updateAddress(state, action: PayloadAction<IAddress>) {
      const index = state.addresses.findIndex((address) => address.id === action.payload.id);
      if (index !== -1) {
        state.addresses[index] = action.payload;
      }
    },
  },
});

export const {
  fetchAddresssRequest,
  fetchAddresssSuccess,
  fetchAddresssFailure,
  addAddress,
  deleteAddress,
  updateAddress
} = addressSlice.actions;

export default addressSlice.reducer;
