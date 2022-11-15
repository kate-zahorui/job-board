import { createSlice } from '@reduxjs/toolkit';
import { getJobs } from './jobsOperations';

const initialState = {
  items: [],
  currentJob: null,
  isLoading: false,
  error: '',
  page: 1,
};

export const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    setJob: (state, action) => {
      state.currentJob = action.payload;
    },
  },
  extraReducers: {
    // ------------ getJobs ------------

    [getJobs.pending]: (state, _) => {
      state.isLoading = true;
      state.error = '';
    },
    [getJobs.fulfilled]: (state, action) => {
      state.isLoading = false;

      if (action.payload.length > 0) {
        state.items = action.payload;
      }
    },
    [getJobs.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.message;
    },
  },
});

export const { setJob } = jobsSlice.actions;

export default jobsSlice.reducer;
