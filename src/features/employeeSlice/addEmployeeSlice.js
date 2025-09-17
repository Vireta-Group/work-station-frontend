import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../api/apiClient";

export const submitEmployee = createAsyncThunk(
  "employee/submitEmployee",
  async (employeeData, { rejectWithValue }) => {
    try {
      const res = await apiClient("work/addProfile", employeeData);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Something went wrong");
    }
  }
);

const addEmployeeSlice = createSlice({
  name: "addEmployee",
  initialState: {
    loading: false,
    success: false,
    error: null,
  },
  reducers: {
    resetState: (state) => {
      state.loading = false;
      state.success = false;
      state.error = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitEmployee.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(submitEmployee.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(submitEmployee.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetState } = addEmployeeSlice.actions;
export default addEmployeeSlice.reducer;
