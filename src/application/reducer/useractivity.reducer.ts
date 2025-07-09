import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import IUserActivity from "@/domain/entities/userActivity.entity";
import { userActivitiestate } from "../types/state.types";

const initialState: userActivitiestate = {
  loading: false,
  error: null,
  userActivities: [],
};

const userActivitieslice = createSlice({
  name: "userActivities",
  initialState,
  reducers: {
    fetchuserActivitiesRequest(state) {
      state.loading = true;
      state.error = null;
    },
    fetchuserActivitiesSuccess(state, action: PayloadAction<IUserActivity[]>) {
      state.loading = false;
      state.userActivities = action.payload;
    },
    fetchuserActivitiesFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    addUserActivity(state, action: PayloadAction<IUserActivity>) {
      state.userActivities.push(action.payload);
    },
    deleteUserActivity(state, action: PayloadAction<number>) {
      state.userActivities = state.userActivities.filter((useractivity) => useractivity.id !== action.payload);
    },
    updateUserActivity(state, action: PayloadAction<IUserActivity>) {
      const index = state.userActivities.findIndex((useractivity) => useractivity.id === action.payload.id);
      if (index !== -1) {
        state.userActivities[index] = action.payload;
      }
    },
  },
});

export const {
  fetchuserActivitiesRequest,
  fetchuserActivitiesSuccess,
  fetchuserActivitiesFailure,
  addUserActivity,
  deleteUserActivity,
  updateUserActivity
} = userActivitieslice.actions;

export default userActivitieslice.reducer;
