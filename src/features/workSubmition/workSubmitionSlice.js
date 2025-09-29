import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../api/apiClient";

const initialState = {
  successMessage: null,
  status: "idle",
  error: null,
};

export const workSubmision = createAsyncThunk(
  "work/create",
  async (data1, { rejectWithValue }) => {
    console.log(data1);
    try {
      const response = await apiClient.post("work/create", data1);

      const { data } = response;

      if (data.status === "success") {
        return data;
      }
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || err.message || "Work Submission failed"
      );
    }
  }
);

const workSubmisionSlice = createSlice({
  name: "work submision",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(workSubmision.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(workSubmision.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.successMessage = action.payload;
      })
      .addCase(workSubmision.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default workSubmisionSlice.reducer;
