import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClint from "../../api/apiClient";

/**
 * POST https://work.viretadev.com/api/work/getAllMembersByRole
 * body: { role_id: number }
 */
export const fetchMembersByRole = createAsyncThunk(
  "roleMembers/fetchByRole",
  async (roleId, { rejectWithValue }) => {
    try {
      const res = await apiClint.post("/work/getAllMembersByRole", {
        role_id: roleId,
      });
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

const roleMembersSlice = createSlice({
  name: "roleMembers",
  initialState,
  reducers: {
    clearMembers(state) {
      state.items = [];
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMembersByRole.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchMembersByRole.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = Array.isArray(action.payload)
          ? action.payload
          : action.payload?.data ?? [];
      })
      .addCase(fetchMembersByRole.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || action.error;
      });
  },
});

export const { clearMembers } = roleMembersSlice.actions;

export default roleMembersSlice.reducer;

export const selectMembers = (state) => state.roleMembers.items;
export const selectMembersStatus = (state) => state.roleMembers.status;
export const selectMembersError = (state) => state.roleMembers.error;
