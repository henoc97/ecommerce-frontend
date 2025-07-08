import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import IUser from "@/domain/entities/user.entity";

interface UserState {
  loading: boolean;
  error: string | null;
  user: IUser | null;
}

const initialState: UserState = {
  loading: false,
  error: null,
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<IUser>) {
      state.loading = false;
      state.user = action.payload;
    },
    setUserLoading(state) {
      state.loading = true;
      state.error = null;
    },
    setUserError(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { setUser, setUserLoading, setUserError } = userSlice.actions;
export default userSlice.reducer;
