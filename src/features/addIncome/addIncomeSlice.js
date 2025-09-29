import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClint from "../../api/apiClient";

/**
 * POST https://work.viretadev.com/api/work/add_income
 * body: { ...incomePayload }
 */
export const addIncome = createAsyncThunk(
  "addIncome/add",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await apiClint.post("/work/add_income", payload);
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

const addIncomeSlice = createSlice({
  name: "addIncome",
  initialState,
  reducers: {
    clearAddIncome(state) {
      state.data = null;
      state.status = "idle";
      state.error = null;
    },
    resetAddIncomeStatus(state) {
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addIncome.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(addIncome.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload?.data ?? action.payload ?? null;
      })
      .addCase(addIncome.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload ?? action.error;
      });
  },
});

export const { clearAddIncome, resetAddIncomeStatus } = addIncomeSlice.actions;

export default addIncomeSlice.reducer;

export const selectAddIncomeData = (state) => state.addIncome?.data ?? null;
export const selectAddIncomeStatus = (state) =>
  state.addIncome?.status ?? "idle";
export const selectAddIncomeError = (state) => state.addIncome?.error ?? null;
