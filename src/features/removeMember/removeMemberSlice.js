import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClint from "../../api/apiClient";

/**
 * POST https://work.viretadev.com/api/work/removeMemberFromTeam
 * body: { leader_id: number, member_id: number }
 */
export const removeMember = createAsyncThunk(
  "removeMember/remove",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await apiClint.post("/work/removeMemberFromTeam", payload);
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

const removeMemberSlice = createSlice({
  name: "removeMember",
  initialState,
  reducers: {
    clearRemoveMember(state) {
      state.data = null;
      state.status = "idle";
      state.error = null;
    },
    resetRemoveMemberStatus(state) {
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(removeMember.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(removeMember.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload?.data ?? action.payload ?? null;
      })
      .addCase(removeMember.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload ?? action.error;
      });
  },
});

export const { clearRemoveMember, resetRemoveMemberStatus } =
  removeMemberSlice.actions;

export default removeMemberSlice.reducer;

export const selectRemoveMemberData = (state) =>
  state.removeMember?.data ?? null;
export const selectRemoveMemberStatus = (state) =>
  state.removeMember?.status ?? "idle";
export const selectRemoveMemberError = (state) =>
  state.removeMember?.error ?? null;
