import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import IProduct from "@/domain/entities/product.entity";
import { ProductState } from "../types/state.types";

const initialState: ProductState = {
  loading: false,
  error: null,
  products: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchProductsRequest(state) {
      state.loading = true;
      state.error = null;
    },
    fetchProductsSuccess(state, action: PayloadAction<IProduct[]>) {
      state.loading = false;
      state.products = action.payload;
    },
    fetchProductsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    addProduct(state, action: PayloadAction<IProduct>) {
      state.products.push(action.payload);
    },
    deleteProduct(state, action: PayloadAction<number>) {
      state.products = state.products.filter((product) => product.id !== action.payload);
    },
    updateProduct(state, action: PayloadAction<IProduct>) {
      const index = state.products.findIndex((product) => product.id === action.payload.id);
      if (index !== -1) {
        state.products[index] = action.payload;
      }
    },
  },
});

export const {
  fetchProductsRequest,
  fetchProductsSuccess,
  fetchProductsFailure,
  addProduct,
  deleteProduct,
  updateProduct
} = productSlice.actions;

export default productSlice.reducer;
