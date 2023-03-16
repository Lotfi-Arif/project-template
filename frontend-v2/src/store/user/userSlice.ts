import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, LoadingError } from '../types';

interface UserState extends LoadingError {
  users: User[];
}

const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Existing reducers ...
    updateUserRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    updateUserSuccess: (state, action: PayloadAction<User>) => {
      state.loading = false;
      state.error = null;
      const index = state.users.findIndex(
        (user) => user.id === action.payload.id
      );
      if (index !== -1) {
        state.users[index] = action.payload;
      }
    },
    updateUserFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { updateUserRequest, updateUserSuccess, updateUserFailure } =
  userSlice.actions;

export default userSlice.reducer;
