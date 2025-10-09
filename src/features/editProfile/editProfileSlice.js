import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClint from "../../api/apiClient";

export const editProfile = createAsyncThunk(
  "editProfile/update",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await apiClint.post("/work/updateProfileForMD", payload);
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

const editProfileSlice = createSlice({
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
      .addCase(editProfile.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(editProfile.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload ?? action.payload ?? null;
      })
      .addCase(editProfile.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload ?? action.error;
      });
  },
});

export const { clearEmpById, resetEmpByIdStatus } = editProfileSlice.actions;

export default editProfileSlice.reducer;

export const selectEmpById = (state) => state.empById?.data ?? null;
export const selectEmpByIdStatus = (state) => state.empById?.status ?? "idle";
export const selectEmpByIdError = (state) => state.empById?.error ?? null;
