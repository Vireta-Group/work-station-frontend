import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClint from "../../api/apiClient";

/**
 * POST https://work.viretadev.com/api/work/myWordDistribute
 * body: optional payload (e.g., filters)
 */
export const fetchMyWork = createAsyncThunk(
  "myWork/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const res = await apiClint.post("/work/myWordDistribute");
      return res.data;
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

const myWorkSlice = createSlice({
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
      .addCase(fetchMyWork.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchMyWork.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = Array.isArray(action.payload)
          ? action.payload
          : action.payload?.data ?? [];
      })
      .addCase(fetchMyWork.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || action.error;
      });
  },
});

export const { clearMyWork } = myWorkSlice.actions;

export default myWorkSlice.reducer;

export const selectMyWork = (state) => state.myWork.items;
export const selectMyWorkStatus = (state) => state.myWork.status;
export const selectMyWorkError = (state) => state.myWork.error;
