import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import IProductVariant from "@/domain/entities/productVariant.entity";
import { ProductVariantState } from "../types/state.types";

const initialState: ProductVariantState = {
  loading: false,
  error: null,
  productvariants: [],
};

const productvariantSlice = createSlice({
  name: "productvariants",
  initialState,
  reducers: {
    fetchProductVariantsRequest(state) {
      state.loading = true;
      state.error = null;
    },
    fetchProductVariantsSuccess(state, action: PayloadAction<IProductVariant[]>) {
      state.loading = false;
      state.productvariants = action.payload;
    },
    fetchProductVariantsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    addProductVariant(state, action: PayloadAction<IProductVariant>) {
      state.productvariants.push(action.payload);
    },
    deleteProductVariant(state, action: PayloadAction<number>) {
      state.productvariants = state.productvariants.filter((productvariant) => productvariant.id !== action.payload);
    },
    updateProductVariant(state, action: PayloadAction<IProductVariant>) {
      const index = state.productvariants.findIndex((productvariant) => productvariant.id === action.payload.id);
      if (index !== -1) {
        state.productvariants[index] = action.payload;
      }
    },
  },
});

export const {
  fetchProductVariantsRequest,
  fetchProductVariantsSuccess,
  fetchProductVariantsFailure,
  addProductVariant,
  deleteProductVariant,
  updateProductVariant
} = productvariantSlice.actions;

export default productvariantSlice.reducer;
