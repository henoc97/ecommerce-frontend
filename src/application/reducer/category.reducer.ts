import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ICategory from "@/domain/entities/category.entity";
import { CategoryState } from "../types/state.types";

const initialState: CategoryState = {
  loading: false,
  error: null,
  categorys: [],
};

const categorySlice = createSlice({
  name: "categorys",
  initialState,
  reducers: {
    fetchCategorysRequest(state) {
      state.loading = true;
      state.error = null;
    },
    fetchCategorysSuccess(state, action: PayloadAction<ICategory[]>) {
      state.loading = false;
      state.categorys = action.payload;
    },
    fetchCategorysFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    addCategory(state, action: PayloadAction<ICategory>) {
      state.categorys.push(action.payload);
    },
    deleteCategory(state, action: PayloadAction<number>) {
      state.categorys = state.categorys.filter((category) => category.id !== action.payload);
    },
    updateCategory(state, action: PayloadAction<ICategory>) {
      const index = state.categorys.findIndex((category) => category.id === action.payload.id);
      if (index !== -1) {
        state.categorys[index] = action.payload;
      }
    },
  },
});

export const {
  fetchCategorysRequest,
  fetchCategorysSuccess,
  fetchCategorysFailure,
  addCategory,
  deleteCategory,
  updateCategory
} = categorySlice.actions;

export default categorySlice.reducer;
