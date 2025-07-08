import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import IUserActivity from "@/domain/entities/useractivity.entity";
import { UserActivityState } from "../types/state.types";

const initialState: UserActivityState = {
  loading: false,
  error: null,
  useractivitys: [],
};

const useractivitySlice = createSlice({
  name: "useractivitys",
  initialState,
  reducers: {
    fetchUserActivitysRequest(state) {
      state.loading = true;
      state.error = null;
    },
    fetchUserActivitysSuccess(state, action: PayloadAction<IUserActivity[]>) {
      state.loading = false;
      state.useractivitys = action.payload;
    },
    fetchUserActivitysFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    addUserActivity(state, action: PayloadAction<IUserActivity>) {
      state.useractivitys.push(action.payload);
    },
    deleteUserActivity(state, action: PayloadAction<number>) {
      state.useractivitys = state.useractivitys.filter((useractivity) => useractivity.id !== action.payload);
    },
    updateUserActivity(state, action: PayloadAction<IUserActivity>) {
      const index = state.useractivitys.findIndex((useractivity) => useractivity.id === action.payload.id);
      if (index !== -1) {
        state.useractivitys[index] = action.payload;
      }
    },
  },
});

export const {
  fetchUserActivitysRequest,
  fetchUserActivitysSuccess,
  fetchUserActivitysFailure,
  addUserActivity,
  deleteUserActivity,
  updateUserActivity
} = useractivitySlice.actions;

export default useractivitySlice.reducer;
