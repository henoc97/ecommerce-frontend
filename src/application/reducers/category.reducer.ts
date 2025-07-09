import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ICategory from "@/domain/entities/category.entity";
import { categoriestate } from "../types/state.types";

const initialState: categoriestate = {
  loading: false,
  error: null,
  categories: [],
};

const categorieslice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    fetchcategoriesRequest(state) {
      state.loading = true;
      state.error = null;
    },
    fetchcategoriesSuccess(state, action: PayloadAction<ICategory[]>) {
      state.loading = false;
      state.categories = action.payload;
    },
    fetchcategoriesFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    addCategory(state, action: PayloadAction<ICategory>) {
      state.categories.push(action.payload);
    },
    deleteCategory(state, action: PayloadAction<number>) {
      state.categories = state.categories.filter((category) => category.id !== action.payload);
    },
    updateCategory(state, action: PayloadAction<ICategory>) {
      const index = state.categories.findIndex((category) => category.id === action.payload.id);
      if (index !== -1) {
        state.categories[index] = action.payload;
      }
    },
  },
});

export const {
  fetchcategoriesRequest,
  fetchcategoriesSuccess,
  fetchcategoriesFailure,
  addCategory,
  deleteCategory,
  updateCategory
} = categorieslice.actions;

export default categorieslice.reducer;
