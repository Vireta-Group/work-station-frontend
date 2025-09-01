import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../api/apiClient";
import Cookies from "js-cookie";

const setCookieWithExpiry = (token, hours) => {
  const expires = new Date();
  expires.setTime(expires.getTime() + hours * 60 * 60 * 1000);
  Cookies.set("token", token, { expires });
};

const initialState = {
  user: null,
  isAuthenticated: !!Cookies.get("token"),
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

export const loginUser = createAsyncThunk(
  "auth/login",
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const response = await apiClient.post("/login", { username, password });
      const { data } = response;
      if (data.status === "success" && !!data.token) {
        const { userInfo, token } = data;
        setCookieWithExpiry(token, 24);
        return userInfo;
      }
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || err.message || "Login failed"
      );
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.status = "idle";
      state.error = null;
      Cookies.remove("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        if (Cookies.get("token")) {
          state.status = "succeeded";
          state.user = action.payload.userInfo;
          state.isAuthenticated = true;
        } else {
          state.status = "failed";
          state.isAuthenticated = false;
          state.error = action.payload;
        }
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
        state.isAuthenticated = false;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
