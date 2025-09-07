import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";
import authReducer from "../features/auth/authSlice.js";
import workSubmissionReducers from "../features/workSubmition/workSubmitionSlice.js";

const rootReducer = combineReducers({
  auth: authReducer,
  workSubmision: workSubmissionReducers,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
