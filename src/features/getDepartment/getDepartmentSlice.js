import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClint from "../../api/apiClient";

export const getAllDepartment = createAsyncThunk(
  "work/getDepartment",
  async (_, { rejectWithValue }) => {
    try {
      const res = await apiClint.post("/work/getAllDepartment");
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || { message: err.message });
    }
  }
);

const initialState = {
  departments: [],
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

const departmentSlice = createSlice({
  name: "department",
  initialState,
  reducers: {
    clearDepartments(state) {
      state.departments = [];
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllDepartment.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getAllDepartment.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.departments = Array.isArray(action.payload)
          ? action.payload
          : action.payload?.data ?? [];
      })
      .addCase(getAllDepartment.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || action.error;
      });
  },
});

export const { clearDepartments } = departmentSlice.actions;

export default departmentSlice.reducer;

export const selectDepartments = (state) => state.department.items;
export const selectDepartmentsStatus = (state) => state.department.status;
export const selectDepartmentsError = (state) => state.department.error;
