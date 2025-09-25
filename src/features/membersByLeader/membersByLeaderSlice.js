import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClint from "../../api/apiClient";

/**
 * POST https://work.viretadev.com/api/work/all_team_members_for_leader
 * body: { leader_id: number }
 */
export const fetchMembersByLeader = createAsyncThunk(
  "membersByLeader/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const res = await apiClint.post("/work/all_team_members_for_leader");
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || { message: err.message });
    }
  }
);

const initialState = {
  items: [],
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

const membersByLeaderSlice = createSlice({
  name: "membersByLeader",
  initialState,
  reducers: {
    clearTeamMembers(state) {
      state.items = [];
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMembersByLeader.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchMembersByLeader.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = Array.isArray(action.payload)
          ? action.payload
          : action.payload?.data ?? [];
      })
      .addCase(fetchMembersByLeader.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || action.error;
      });
  },
});

export const { clearTeamMembers } = membersByLeaderSlice.actions;

export default membersByLeaderSlice.reducer;

export const selectTeamMembers = (state) => state.membersByLeader.items;
export const selectTeamMembersStatus = (state) => state.membersByLeader.status;
export const selectTeamMembersError = (state) => state.membersByLeader.error;
