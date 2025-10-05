import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClint from "../../api/apiClient";

/**
 * POST https://work.viretadev.com/api/work/addProfile
 * body: { ...profilePayload }
 */
export const addEmployee = createAsyncThunk(
  "addEmployee/add",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await apiClint.post("/work/addProfile", payload);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data ?? { message: err.message });
    }
  }
);

const initialState = {
  data: null,
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

const addEmployeeSlice = createSlice({
  name: "addEmployee",
  initialState,
  reducers: {
    clearAddEmployee(state) {
      state.data = null;
      state.status = "idle";
      state.error = null;
    },
    resetAddEmployeeStatus(state) {
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addEmployee.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(addEmployee.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload?.data ?? action.payload ?? null;
      })
      .addCase(addEmployee.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload ?? action.error;
      });
  },
});

export const { clearAddEmployee, resetAddEmployeeStatus } =
  addEmployeeSlice.actions;

export default addEmployeeSlice.reducer;

export const selectAddEmployeeData = (state) => state.addEmployee?.data ?? null;
export const selectAddEmployeeStatus = (state) =>
  state.addEmployee?.status ?? "idle";
export const selectAddEmployeeError = (state) =>
  state.addEmployee?.error ?? null;
