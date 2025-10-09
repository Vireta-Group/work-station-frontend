import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClint from "../../api/apiClient";

/**
 * POST https://work.viretadev.com/api/work/getEmployeeProfileByID
 * body: { emp_id: string|number }
 */
export const fetchEmployeeById = createAsyncThunk(
  "empById/fetch",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await apiClint.post("/work/getEmployeeProfileByID", payload);
      return res.data.user;
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

const empByIdSlice = createSlice({
  name: "empById",
  initialState,
  reducers: {
    clearEmpById(state) {
      state.data = null;
      state.status = "idle";
      state.error = null;
    },
    resetEmpByIdStatus(state) {
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployeeById.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchEmployeeById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload ?? action.payload ?? null;
      })
      .addCase(fetchEmployeeById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload ?? action.error;
      });
  },
});

export const { clearEmpById, resetEmpByIdStatus } = empByIdSlice.actions;

export default empByIdSlice.reducer;

export const selectEmpById = (state) => state.empById?.data ?? null;
export const selectEmpByIdStatus = (state) => state.empById?.status ?? "idle";
export const selectEmpByIdError = (state) => state.empById?.error ?? null;
