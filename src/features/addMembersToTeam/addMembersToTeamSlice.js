import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../api/apiClient";

export const addMembersToTeam = createAsyncThunk(
  "work/addMembersToTeam",
  async (payload, { rejectWithValue }) => {
    console.log("Payload to send:", payload); // ✅ debug payload
    try {
      const response = await apiClient.post("/work/addMembersToTeam", payload);
      console.log("Response from API:", response.data); // ✅ debug response
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "something went wrong");
    }
  }
);

const initialState = {
  // items: [],
  message: null,
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

const addMembersToTeamSlice = createSlice({
  name: "addMembersToTeam",
  initialState,
  reducers: {
    clearMembers(state) {
      // state.items = [];
      state.message = null;
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addMembersToTeam.pending, (state) => {
        state.status = "loading";
        state.error = null;
        state.message = null;
      })
      .addCase(addMembersToTeam.fulfilled, (state, action) => {
        state.status = "succeeded";
        // If array or data comes in future
        // if (Array.isArray(action.payload)) {
        //   state.items = action.payload;
        // } else if (action.payload?.data) {
        //   state.items = action.payload.data;
        // }

        // Just hold the message for now
        state.message = action.payload?.message || "Operation successful";
        // state.items = action.payload?.data || [];
      })
      .addCase(addMembersToTeam.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || action.error.message;
        state.message = null;
      });
  },
});

export const { clearMembers } = addMembersToTeamSlice.actions;

export default addMembersToTeamSlice.reducer;

export const selectAddMembers = (state) => state.addMembersToTeam.items;
export const selectAddMembersStatus = (state) => state.addMembersToTeam.status;
export const selectAddMembersError = (state) => state.addMembersToTeam.error;
