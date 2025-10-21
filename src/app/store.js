import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";
import authReducer from "../features/auth/authSlice.js";
import workSubmissionReducer from "../features/workSubmition/workSubmitionSlice.js";
import userReducer from "../features/user/userSlice.js";
import updateProfileReducer from "../features/updateProfile/updateProfileSlice.js";
import rolesDepartmentReducer from "../features/rolesDepartment/rolesDeparmentSlice.js";
import roleMembersReducer from "../features/roleMembers/roleMembersSlice.js";
import addMembersToTeamSlice from "../features/addMembersToTeam/addMembersToTeamSlice.js";
import departmentReducer from "../features/getDepartment/getDepartmentSlice.js";
import membersByLeaderReducer from "../features/membersByLeader/membersByLeaderSlice.js";
import workDistributionReducer from "../features/workDistribution/workDistributionSlice.js";
import myWorkReducer from "../features/myWork/myWorkSlice.js";
import addIncomeReducer from "../features/addIncome/addIncomeSlice.js";
import addExpenseReducer from "../features/addExpenes/addExpenesSlice.js";
import expenesReportReducer from "../features/expenesReport/expenesReportSlice.js";
import removeMemeberReducer from "../features/removeMember/removeMemberSlice.js";
import addEmployeeReducer from "../features/addEmployee/addEmployeeSlice.js";
import taskHistoryReducer from "../features/taskHistory/taskHistorySlice.js";
import employeeByDepertmentReducer from "../features/employeeByDepartment/employeeByDepartmentSlice.js";
import empByIdReducer from "../features/empById/empByIdSlice.js";
import editProfileReducer from "../features/editProfile/editProfileSlice.js";
import todayTaskReducer from "../features/todayTask/todayTaskSlice.js";
import resignedEmployeeReducer from "../features/resignedEmployee/resignedEmployeeSlice.js";
import employeeAttendanceReducer from "../features/employeeAttendance/employeeAttendanceSlice.js";

const rootReducer = combineReducers({
  auth: authReducer,
  workSubmission: workSubmissionReducer,
  user: userReducer,
  updateUser: updateProfileReducer,
  rolesDepartment: rolesDepartmentReducer,
  roleMembers: roleMembersReducer,
  addMembersToTeam: addMembersToTeamSlice,
  getAllDepartment: departmentReducer,
  membersByLeader: membersByLeaderReducer,
  workDistribution: workDistributionReducer,
  myWork: myWorkReducer,
  addIncome: addIncomeReducer,
  addExpense: addExpenseReducer,
  expenesReport: expenesReportReducer,
  removeMember: removeMemeberReducer,
  addEmployee: addEmployeeReducer,
  taskHistory: taskHistoryReducer,
  employeeByDepertment: employeeByDepertmentReducer,
  empById: empByIdReducer,
  editProfile: editProfileReducer,
  todayTask: todayTaskReducer,
  resignedEmployee: resignedEmployeeReducer,
  employeeAttendance: employeeAttendanceReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
