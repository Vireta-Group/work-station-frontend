import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClint from "../../api/apiClient";

/**
 * POST https://work.viretadev.com/api/work/add_income
 * body: { ...incomePayload }
 */
export const addExpense = createAsyncThunk(
  "addExpense/add",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await apiClint.post("/work/add_expense", payload);
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

const addExpenseSlice = createSlice({
  name: "addExpense",
  initialState,
  reducers: {
    clearAddExpense(state) {
      state.data = null;
      state.status = "idle";
      state.error = null;
    },
    resetAddExpenseStatus(state) {
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addExpense.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(addExpense.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload?.data ?? action.payload ?? null;
      })
      .addCase(addExpense.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload ?? action.error;
      });
  },
});

export const { clearAddExpense, resetAddExpenseStatus } =
  addExpenseSlice.actions;

export default addExpenseSlice.reducer;

export const selectAddExpenseData = (state) => state.addExpense?.data ?? null;
export const selectAddExpenseStatus = (state) =>
  state.addExpense?.status ?? "idle";
export const selectAddExpenseError = (state) => state.addExpense?.error ?? null;
