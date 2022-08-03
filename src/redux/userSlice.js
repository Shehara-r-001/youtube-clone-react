import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: null,
  loading: false,
  error: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
    },
    loginSuccessful: (state, action) => {
      state.loading = false;
      state.currentUser = action.payload;
    },
    loginFailed: (state) => {
      state.loading = false;
      state.error = true;
    },
    logOut: (state) => {
      return initialState;
    },
  },
});

export const { loginStart, loginSuccessful, loginFailed, logOut } =
  userSlice.actions;

export default userSlice.reducer;
