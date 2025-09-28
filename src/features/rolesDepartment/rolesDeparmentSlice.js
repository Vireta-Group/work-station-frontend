import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClint from "../../api/apiClient";
/**
 * POST https://work.viretadev.com/api/work/getAllRolesByDepartment
 * body: { department_id: number }
 */

export const fetchRolesByDepartment = createAsyncThunk(
  "rolesDepartment/fetchByDepartment",
  async (departmentId, { rejectWithValue }) => {
    try {
      const res = await apiClint.post("/work/getAllRolesByDepartment", {
        department_id: departmentId,
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

const rolesDepartmentSlice = createSlice({
  name: "rolesDepartment",
  initialState,
  reducers: {
    clearRoles(state) {
      state.items = [];
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRolesByDepartment.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchRolesByDepartment.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = Array.isArray(action.payload)
          ? action.payload
          : action.payload?.data ?? [];
      })
      .addCase(fetchRolesByDepartment.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || action.error;
      });
  },
});

export const { clearRoles } = rolesDepartmentSlice.actions;

export default rolesDepartmentSlice.reducer;

export const selectRoles = (state) => state.rolesDepartment.items;
export const selectRolesStatus = (state) => state.rolesDepartment.status;
export const selectRolesError = (state) => state.rolesDepartment.error;
