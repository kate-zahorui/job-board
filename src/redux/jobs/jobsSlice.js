import { createSlice } from '@reduxjs/toolkit';
import { getJobs } from './jobsOperations';

const initialState = {
  items: [],
  currentJob: null,
  isLoading: false,
  error: '',
  perPage: 15,
};

export const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    setJob: (state, action) => {
      const job = state.items.find(i => i.id === action.payload);
      state.currentJob = job;
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
