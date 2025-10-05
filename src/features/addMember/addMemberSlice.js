import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClint from "../../api/apiClient";

/**
 * POST https://work.viretadev.com/api/work/addMembersToTeam
 * body:
 * {
 *   leader_id: number,
 *   members: [{ memberid: number }, ...]
 * }
 */
export const addMembersToTeam = createAsyncThunk(
  "addMember/add",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await apiClint.post("/work/addMembersToTeam", payload);
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

const addMemberSlice = createSlice({
  name: "addMember",
  initialState,
  reducers: {
    clearAddMember(state) {
      state.data = null;
      state.status = "idle";
      state.error = null;
    },
    resetAddMemberStatus(state) {
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addMembersToTeam.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(addMembersToTeam.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload?.data ?? action.payload ?? null;
      })
      .addCase(addMembersToTeam.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload ?? action.error;
      });
  },
});

export const { clearAddMember, resetAddMemberStatus } = addMemberSlice.actions;

export default addMemberSlice.reducer;

export const selectAddMemberData = (state) => state.addMember?.data ?? null;
export const selectAddMemberStatus = (state) =>
  state.addMember?.status ?? "idle";
export const selectAddMemberError = (state) => state.addMember?.error ?? null;
