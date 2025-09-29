import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClint from "../../api/apiClient";

/**
 * POST https://work.viretadev.com/api/work/show_income_expense_report_by_dates
 * body: { start_date: "YYYY-MM-DD", end_date: "YYYY-MM-DD" }
 */
export const fetchExpenseReportByDates = createAsyncThunk(
  "expenesReport/fetchByDates",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await apiClint.post(
        "/work/show_income_expense_report_by_dates",
        payload
      );
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data ?? { message: err.message });
    }
  }
);

const initialState = {
  report: null, // expected report object (income/expense data)
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

const expenesReportSlice = createSlice({
  name: "expenesReport",
  initialState,
  reducers: {
    clearExpenseReport(state) {
      state.report = null;
      state.status = "idle";
      state.error = null;
    },
    resetExpenseReportStatus(state) {
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchExpenseReportByDates.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchExpenseReportByDates.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.report = action.payload?.data ?? action.payload ?? null;
      })
      .addCase(fetchExpenseReportByDates.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload ?? action.error;
      });
  },
});

export const { clearExpenseReport, resetExpenseReportStatus } =
  expenesReportSlice.actions;

export default expenesReportSlice.reducer;

export const selectExpenseReport = (state) =>
  state.expenesReport?.report ?? null;
export const selectExpenseReportStatus = (state) =>
  state.expenesReport?.status ?? "idle";
export const selectExpenseReportError = (state) =>
  state.expenesReport?.error ?? null;
