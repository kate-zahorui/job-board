import { createAsyncThunk } from '@reduxjs/toolkit';
import { UserAPI } from '../../services/api';

export const getJobs = createAsyncThunk(
  'jobs/getJobs',
  async (_, { rejectWithValue }) => {
    try {
      const jobs = await UserAPI.fetchJobs();
      return jobs;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
