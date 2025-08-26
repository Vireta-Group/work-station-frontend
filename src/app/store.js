import { configureStore } from "@reduxjs/toolkit";
import demoReducer from "../features/demo/demoSlice.js";

export const store = configureStore({
  reducer: {
    demo: demoReducer,
  },
});
