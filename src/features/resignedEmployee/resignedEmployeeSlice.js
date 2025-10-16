import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiClient from "../../api/apiClient";

/**
 * POST /api/work/resignedEmployee
 * body: { emp_id: string }
 */
export const resignedEmployee = createAsyncThunk(
  "resignedEmployee/post",
  async ({ emp_id }, { rejectWithValue }) => {
    try {
      if (!emp_id) {
        return rejectWithValue("emp_id is required");
      }

      // axios supports AbortController via the `signal` option
      const res = await apiClient.post("/work/resignedEmployee", {
        emp_id,
      });

      return res.data;
    } catch (err) {
      // Normalize error message
      const message =
        err?.response?.data?.message ||
        err?.response?.data?.error ||
        err?.message ||
        "Request failed";
      return rejectWithValue(message);
    }
  }
);

const initialState = {
  status: "idle",
  error: null,
  data: null,
};

const resignedEmployeeSlice = createSlice({
  name: "resignedEmployee",
  initialState,
  reducers: {
    resetResignedEmployeeState: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(resignedEmployee.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(resignedEmployee.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.task = action.payload;
      })
      .addCase(resignedEmployee.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { resetResignedEmployeeState } = resignedEmployeeSlice.actions;

// Selectors
export const selectResignedEmployeeLoading = (state) =>
  state.resignedEmployee.loading;
export const selectResignedEmployeeSuccess = (state) =>
  state.resignedEmployee.success;
export const selectResignedEmployeeError = (state) =>
  state.resignedEmployee.error;
export const selectResignedEmployeeData = (state) =>
  state.resignedEmployee.data;
export const selectResignedEmployeeLastEmpId = (state) =>
  state.resignedEmployee.lastEmpId;

export default resignedEmployeeSlice.reducer;
