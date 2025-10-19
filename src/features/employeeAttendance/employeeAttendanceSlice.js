import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClint from "../../api/apiClient";

/**
 * POST https://work.viretadev.com/api/work/employeeAttendanceShow
 * body: { department_id: string|number, start_date: string, end_date: string }
 */
export const fetchEmployeeAttendanceByDates = createAsyncThunk(
  "employeeAttendance/fetchByDates",
  async (
    payload = { department_id: "", start_date: "", end_date: "" },
    { rejectWithValue }
  ) => {
    try {
      const res = await apiClint.post("/work/employeeAttendanceShow", payload);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data ?? { message: err.message });
    }
  }
);

const initialState = {
  items: [], // attendance rows
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

const employeeAttendanceSlice = createSlice({
  name: "employeeAttendance",
  initialState,
  reducers: {
    clearEmployeeAttendance(state) {
      state.items = [];
      state.status = "idle";
      state.error = null;
    },
    resetEmployeeAttendanceStatus(state) {
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployeeAttendanceByDates.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchEmployeeAttendanceByDates.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Accept either array payload or { data: [...] }
        state.items = Array.isArray(action.payload)
          ? action.payload
          : action.payload?.data ?? [];
      })
      .addCase(fetchEmployeeAttendanceByDates.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload ?? action.error;
      });
  },
});

export const { clearEmployeeAttendance, resetEmployeeAttendanceStatus } =
  employeeAttendanceSlice.actions;

export default employeeAttendanceSlice.reducer;

// Selectors
export const selectEmployeeAttendance = (state) =>
  state.employeeAttendance?.items ?? [];
export const selectEmployeeAttendanceStatus = (state) =>
  state.employeeAttendance?.status ?? "idle";
export const selectEmployeeAttendanceError = (state) =>
  state.employeeAttendance?.error ?? null;
