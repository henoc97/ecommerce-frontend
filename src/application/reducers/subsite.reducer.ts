import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ISubsite from "@/domain/entities/subsite.entity";
import { SubsiteState } from "../types/state.types";

const initialState: SubsiteState = {
  loading: false,
  error: null,
  subsites: [],
};

const subsiteSlice = createSlice({
  name: "subsites",
  initialState,
  reducers: {
    fetchSubsitesRequest(state) {
      state.loading = true;
      state.error = null;
    },
    fetchSubsitesSuccess(state, action: PayloadAction<ISubsite[]>) {
      state.loading = false;
      state.subsites = action.payload;
    },
    fetchSubsitesFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    addSubsite(state, action: PayloadAction<ISubsite>) {
      state.loading = false;
      state.subsites.push(action.payload);
    },
    deleteSubsite(state, action: PayloadAction<number>) {
      state.loading = false;
      state.subsites = state.subsites.filter((subsite) => subsite.id !== action.payload);
    },
    updateSubsite(state, action: PayloadAction<ISubsite>) {
      state.loading = false;
      const index = state.subsites.findIndex((subsite) => subsite.id === action.payload.id);
      if (index !== -1) {
        state.subsites[index] = action.payload;
      }
    },
  },
});

export const {
  fetchSubsitesRequest,
  fetchSubsitesSuccess,
  fetchSubsitesFailure,
  addSubsite,
  deleteSubsite,
  updateSubsite
} = subsiteSlice.actions;

export default subsiteSlice.reducer;
