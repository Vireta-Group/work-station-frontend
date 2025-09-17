import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../api/apiClient";

const initialState = {
  user: null,
  status: "idle",
  error: null,
};

export const user = createAsyncThunk(
  "work/profile",
  async (_, { rejectWithValue }) => {
    try {
      const response = await apiClient.post("work/profile");
      const { data } = response;
      console.log(data);

      if (data.status === "success") {
        return data.user;
      }

      return rejectWithValue("Unexpected response format");
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(user.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(user.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(user.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default userSlice.reducer;
