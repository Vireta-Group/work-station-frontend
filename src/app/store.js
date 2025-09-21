import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";
import authReducer from "../features/auth/authSlice.js";
import workSubmissionReducer from "../features/workSubmition/workSubmitionSlice.js";
import userReducer from "../features/user/userSlice.js";
import updateProfileReducer from "../features/updateProfile/updateProfileSlice.js";
import rolesDepartmentReducer from "../features/rolesDepartment/rolesDeparmentSlice.js";
import roleMembersReducer from "../features/roleMembers/roleMembersSlice.js";

const rootReducer = combineReducers({
  auth: authReducer,
  workSubmision: workSubmissionReducer,
  user: userReducer,
  updateUser: updateProfileReducer,
  rolesDepartment: rolesDepartmentReducer,
  roleMembers: roleMembersReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
