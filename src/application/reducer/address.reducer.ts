import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import IAddress from "@/domain/entities/address.entity";
import { AddressState } from "../types/state.types";

const initialState: AddressState = {
  loading: false,
  error: null,
  addresss: [],
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
      state.addresss = action.payload;
    },
    fetchAddresssFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    addAddress(state, action: PayloadAction<IAddress>) {
      state.addresss.push(action.payload);
    },
    deleteAddress(state, action: PayloadAction<number>) {
      state.addresss = state.addresss.filter((address) => address.id !== action.payload);
    },
    updateAddress(state, action: PayloadAction<IAddress>) {
      const index = state.addresss.findIndex((address) => address.id === action.payload.id);
      if (index !== -1) {
        state.addresss[index] = action.payload;
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
