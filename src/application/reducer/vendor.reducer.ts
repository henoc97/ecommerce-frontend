import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import IVendor from "@/domain/entities/vendor.entity";
import { VendorState } from "../types/state.types";

const initialState: VendorState = {
  loading: false,
  error: null,
  vendors: [],
};

const vendorSlice = createSlice({
  name: "vendors",
  initialState,
  reducers: {
    fetchVendorRequest(state) {
      state.loading = true;
      state.error = null;
    },
    fetchVendorSuccess(state, action: PayloadAction<IVendor[]>) {
      state.loading = false;
      state.vendors = action.payload;
    },
    fetchVendorFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    addVendor(state, action: PayloadAction<IVendor>) {
      state.vendors.push(action.payload);
    },
    deleteVendor(state, action: PayloadAction<number>) {
      state.vendors = state.vendors.filter((vendors: { id: number; }) => vendors.id !== action.payload);
    },
    updateVendor(state, action: PayloadAction<IVendor>) {
      const index = state.vendors.findIndex((vendors: { id: number; }) => vendors.id === action.payload.id);
      if (index !== -1) {
        state.vendors[index] = action.payload;
      }
    },
  },
});

export const {
  fetchVendorRequest,
  fetchVendorSuccess,
  fetchVendorFailure,
  addVendor,
  deleteVendor,
  updateVendor
} = vendorSlice.actions;

export default vendorSlice.reducer;
