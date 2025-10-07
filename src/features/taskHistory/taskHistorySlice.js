import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClint from "../../api/apiClient";

/**
 * POST https://work.viretadev.com/api/work/workDistributeShowDates
 * body: { emp_id: string|number, startdate: string, enddate: string }
 */
export const fetchTaskHistoryByDates = createAsyncThunk(
  "taskHistory/fetchByDates",
  async (
    payload = { emp_id: "", startdate: "", enddate: "" },
    { rejectWithValue }
  ) => {
    try {
      const res = await apiClint.post("/work/workDistributeShowDates", payload);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data ?? { message: err.message });
    }
  }
);

const initialState = {
  items: [],
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

const taskHistorySlice = createSlice({
  name: "taskHistory",
  initialState,
  reducers: {
    clearTaskHistory(state) {
      state.items = [];
      state.status = "idle";
      state.error = null;
    },
    resetTaskHistoryStatus(state) {
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTaskHistoryByDates.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchTaskHistoryByDates.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = Array.isArray(action.payload)
          ? action.payload
          : action.payload?.data ?? [];
      })
      .addCase(fetchTaskHistoryByDates.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload ?? action.error;
      });
  },
});

export const { clearTaskHistory, resetTaskHistoryStatus } =
  taskHistorySlice.actions;

export default taskHistorySlice.reducer;

export const selectTaskHistory = (state) => state.taskHistory?.items ?? [];
export const selectTaskHistoryStatus = (state) =>
  state.taskHistory?.status ?? "idle";
export const selectTaskHistoryError = (state) =>
  state.taskHistory?.error ?? null;
