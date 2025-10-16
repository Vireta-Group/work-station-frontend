import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../api/apiClient";

const initialState = {
  task: null,
  status: "idle",
  error: null,
};

export const getTodayDistributedTask = createAsyncThunk(
  "work/showWorkDistributionForLeader",
  async (_, { rejectWithValue }) => {
    try {
      const response = await apiClient.post(
        "work/showWorkDistributionForLeader"
      );

      //   console.log(response);

      if (response.data.status === "success") {
        return response.data;
      }

      return rejectWithValue("Unexpected response format");
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const todayTaskSlice = createSlice({
  name: "todayTaskSlice.js",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getTodayDistributedTask.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getTodayDistributedTask.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.task = action.payload.date;
      })
      .addCase(getTodayDistributedTask.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default todayTaskSlice.reducer;
