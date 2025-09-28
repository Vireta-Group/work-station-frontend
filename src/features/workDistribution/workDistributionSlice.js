import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClint from "../../api/apiClient";

/*
https://work.viretadev.com/api/work/addWorkDistribution



        {
            work_title: "string",
            work_desc: "string",
            work_date: "2024-06-24",
            work_expire_date: "2024-06-24",
            work_emp_id: 0            
        }*/
export const workDistribution = createAsyncThunk(
  "work/distribution",
  async (date, { rejectWithValue }) => {
    try {
      const res = await apiClint.post("/work/addWorkDistribution", {
        ...date,
      });
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || { message: err.message });
    }
  }
);

const initialState = {
  date: {},
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

const workDistributionSlice = createSlice({
  name: "workDistribution",
  initialState,
  reducers: {
    clearWorkDistribution(state) {
      state.date = {};
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(workDistribution.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(workDistribution.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.date = action.payload?.data ?? {};
      })
      .addCase(workDistribution.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || action.error;
      });
  },
});

export const { clearWorkDistribution } = workDistributionSlice.actions;

export default workDistributionSlice.reducer;

export const selectWorkDistribution = (state) => state.workDistribution.date;
export const selectWorkDistributionStatus = (state) =>
  state.workDistribution.status;
export const selectWorkDistributionError = (state) =>
  state.workDistribution.error;
