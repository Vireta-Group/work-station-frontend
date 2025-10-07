import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClint from "../../api/apiClient";

/**
 * POST https://work.viretadev.com/api/work/getAllEmployeeByDepartment
 * body: { department_id: number | string }
 */
export const fetchEmployeesByDepartment = createAsyncThunk(
  "employeeByDepartment/fetch",
  async (departmentId, { rejectWithValue }) => {
    try {
      const res = await apiClint.post("/work/getAllEmployeeByDepartment", {
        department_id: departmentId,
      });
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

const employeeByDepartmentSlice = createSlice({
  name: "employeeByDepartment",
  initialState,
  reducers: {
    clearEmployees(state) {
      state.items = [];
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployeesByDepartment.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchEmployeesByDepartment.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = Array.isArray(action.payload)
          ? action.payload
          : action.payload?.data ?? [];
        state.error = null;
      })
      .addCase(fetchEmployeesByDepartment.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload ?? action.error;
      });
  },
});

export const { clearEmployees } = employeeByDepartmentSlice.actions;

export default employeeByDepartmentSlice.reducer;

export const selectEmployeesByDepartment = (state) =>
  state.employeeByDepartment?.items ?? [];
export const selectEmployeesByDepartmentStatus = (state) =>
  state.employeeByDepartment?.status ?? "idle";
export const selectEmployeesByDepartmentError = (state) =>
  state.employeeByDepartment?.error ?? null;
