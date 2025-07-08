import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import IProductImage from "@/domain/entities/productimage.entity";
import { ProductImageState } from "../types/state.types";

const initialState: ProductImageState = {
  loading: false,
  error: null,
  productimages: [],
};

const productimageSlice = createSlice({
  name: "productimages",
  initialState,
  reducers: {
    fetchProductImagesRequest(state) {
      state.loading = true;
      state.error = null;
    },
    fetchProductImagesSuccess(state, action: PayloadAction<IProductImage[]>) {
      state.loading = false;
      state.productimages = action.payload;
    },
    fetchProductImagesFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    addProductImage(state, action: PayloadAction<IProductImage>) {
      state.productimages.push(action.payload);
    },
    deleteProductImage(state, action: PayloadAction<number>) {
      state.productimages = state.productimages.filter((productimage) => productimage.id !== action.payload);
    },
    updateProductImage(state, action: PayloadAction<IProductImage>) {
      const index = state.productimages.findIndex((productimage) => productimage.id === action.payload.id);
      if (index !== -1) {
        state.productimages[index] = action.payload;
      }
    },
  },
});

export const {
  fetchProductImagesRequest,
  fetchProductImagesSuccess,
  fetchProductImagesFailure,
  addProductImage,
  deleteProductImage,
  updateProductImage
} = productimageSlice.actions;

export default productimageSlice.reducer;
