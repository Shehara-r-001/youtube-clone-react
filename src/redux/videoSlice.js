import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentVideo: null,
  loading: false,
  error: false,
};

export const videoSlice = createSlice({
  name: 'video',
  initialState,
  reducers: {
    videoStart: (state) => {
      state.loading = true;
    },
    videoSuccessful: (state, action) => {
      state.loading = false;
      state.currentVideo = action.payload;
    },
    videoFailed: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { videoStart, videoSuccessful, videoFailed } = videoSlice.actions;

export default videoSlice.reducer;
