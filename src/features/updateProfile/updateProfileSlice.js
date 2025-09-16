import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../api/apiClient";

const initialState = {
  message: null,
  status: "idle",
  error: null,
};

export const updateUser = createAsyncThunk(
  "work/update_profile",
  async (updateUser, { rejectWithValue }) => {
    try {
      console.log(updateUser);
      if (updateUser.password.newPassword.trim()) {
        console.log("hell");
      } else {
        const response = await apiClient.post(
          "work/update_profile",
          updateUser.user
        );
        const { data } = response;
        console.log(data);

        if (data.status === "success") {
          return data.user;
        }
      }

      return rejectWithValue("Unexpected response format");
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const updateProfileSlice = createSlice({
  name: "updateProfileSlice",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(updateUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default updateProfileSlice.reducer;
