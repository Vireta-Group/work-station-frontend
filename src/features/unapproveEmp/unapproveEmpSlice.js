import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClint from "../../api/apiClient";

/**
 * POST https://work.viretadev.com/api/work/unapproveEmployes
 * body: optional payload (e.g., filters)
 */
export const fetchUpapproveEmp = createAsyncThunk(
  "unapproveEmployee/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const res = await apiClint.post("/work/unapproveEmployes");
      return res.data.user;
    } catch (err) {
      return rejectWithValue(err.response?.data || { message: err.message });
    }
  }
);

const initialState = {
  items: [],
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

const unapproveEmpSlice = createSlice({
  name: "myWork",
  initialState,
  reducers: {
    clearMyWork(state) {
      state.items = [];
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUpapproveEmp.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchUpapproveEmp.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = Array.isArray(action.payload)
          ? action.payload
          : action.payload?.data ?? [];
      })
      .addCase(fetchUpapproveEmp.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || action.error;
      });
  },
});

export const { clearMyWork } = unapproveEmpSlice.actions;

export default unapproveEmpSlice.reducer;

export const selectMyWork = (state) => state.myWork.items;
export const selectMyWorkStatus = (state) => state.myWork.status;
export const selectMyWorkError = (state) => state.myWork.error;
