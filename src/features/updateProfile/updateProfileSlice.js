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
      if (updateUser.password.newPassword.trim()) {
        const response = await apiClient.post(
          "work/update_profile",
          updateUser.user
        );
        const updatePass = await apiClient.post("work/change_password", {
          current_password: updateUser.password.oldPassword,
          new_password: updateUser.password.newPassword,
        });

        if (response.status === "success" && updatePass.status === "success") {
          return response;
        }
      } else {
        const response = await apiClient.post(
          "work/update_profile",
          updateUser.user
        );

        if (response.status === "success") {
          response;
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
        state.message = action.payload.message;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default updateProfileSlice.reducer;
