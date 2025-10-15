import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";
import Root from "./root";
import AddEmployee from "../coreModule/hrAdmin/addEmployee/AddEmployee";
import LogIn from "../pages/AuthPages/LogIn";
import WorkSubmission from "../coreModule/userPanel/workSubmission/WorkSubmission";
import AdminDashbord from "../coreModule/userPanel/adminDashbord/AdminDashbord";
import UserProfiles from "../coreModule/userPanel/userProfile/UserProfile";
import EmployeePersonalPage from "../coreModule/teamAdminPanel/employeePersonalPage/EmployeePersonalPage";
import UserAttendence from "../coreModule/hrAdmin/UserAttendence/UserAttendence";
import TeamAdminPanel from "../coreModule/teamAdminPanel/TeamAdminPanelDashboard";
import ProtectRoute from "../components/protectRoute/ProtectRoute";
import PublicRoute from "../components/protectRoute/PublicRoute";
import HrDashbord from "../coreModule/hrAdmin/hrDashbord/HrDashbord";
import HomeDashbord from "../pages/HomeDashbord";
import EditEmployee from "../coreModule/hrAdmin/editEmployee/EditEmployee";
import EditEmployeeDashboard from "../coreModule/hrAdmin/editEmployee/EditEmployeeDashboard";
import SupAdDashbord from "../coreModule/superAdmin/dashbord/SupAdDashbord";
import EmployeeList from "../coreModule/superAdmin/employeeList/EmployeeList";
import TaskHistory from "../coreModule/hrAdmin/taskHistoy/TaskHistory";
import EmployeeViewModal from "../coreModule/EmployeeViewModal/EmployeeViewModal";
import AddDepartment from "../coreModule/superAdmin/addDepartment/AddDepartment";
import AddTeamLeader from "../coreModule/superAdmin/addDepartment/AddTeamLeader";
import NotFound from "../components/NotFound/NotFound";
import AddMember from "../coreModule/superAdmin/addDepartment/addMember";
// import WorkDistributionForm from "../coreModule/teamAdminPanel/workDistrubition/WorkDis";
import WorkDistribution from "../coreModule/teamAdminPanel/WorkDistribution/WorkDistribution";
import WorkGroup from "../coreModule/teamAdminPanel/WorkDistribution/WorkGroup";
import AddIncome from "../coreModule/accouting/addIncome/AddIncome";
import AddExpenses from "../coreModule/accouting/addExpenses/AddExpenses";
import Report from "../coreModule/accouting/report/Report";
import RoleProtected from "./RoleProtected";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const data = useSelector((data) => data.user).user;

  if (data?.department === "frontend") {
    if (data?.role === "teamleader") {
      return <AdminDashbord />;
    } else {
      return <HomeDashbord />;
    }
  } else if (data?.department === "management") {
    return <SupAdDashbord />;
  } else if (data?.department === "hr") {
    return <HrDashbord />;
  } else {
    return <p>LODING...</p>;
  }
};

const route = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="login"
        element={
          <PublicRoute>
            <LogIn />
          </PublicRoute>
        }
      />
      <Route
        path="/"
        element={
          <ProtectRoute>
            <Root />
          </ProtectRoute>
        }
      >
        <Route path="workSubmission" element={<WorkSubmission />} />
        <Route path="profile" element={<UserProfiles />} />
        <Route index element={<Dashboard />} />

        <Route
          path="employeeStatus"
          element={
            <RoleProtected roles={["hr", "management"]}>
              <EmployeePersonalPage />
            </RoleProtected>
          }
        />

        <Route
          path="workDistribution"
          element={
            <RoleProtected roles={["frontend"]} isLeader={true}>
              <WorkDistribution />
            </RoleProtected>
          }
        />

        {/* <Route path="workDistribution" element={<WorkDistributionForm />} /> */}
        <Route
          path="employeeAttendence"
          element={
            <RoleProtected roles={["hr", "management"]}>
              <UserAttendence />
            </RoleProtected>
          }
        />

        {/* mahbub.................. */}

        {/* mahbub.................. */}
        {/* mahbub.................. */}

        <Route
          path="add-employee"
          element={
            <RoleProtected roles={["hr", "management"]}>
              <AddEmployee />
            </RoleProtected>
          }
        />

        {/* <Route path="teamadminpanel" element={<TeamAdminPanel />} /> */}
        {/* mahbub.................. */}
        {/* <Route path="employeeList" element={<EmployeeList />} /> */}

        <Route
          path="taskhistory"
          element={
            <RoleProtected roles={["hr", "management"]}>
              <TaskHistory />
            </RoleProtected>
          }
        />
        <Route
          path="editemployee"
          element={
            <RoleProtected roles={["management"]}>
              <EditEmployeeDashboard />
            </RoleProtected>
          }
        />
        <Route
          path="accept-employee"
          element={
            <RoleProtected roles={["management"]}>
              <EmployeeViewModal />
            </RoleProtected>
          }
        />
        <Route
          path="employeeList"
          element={
            <RoleProtected roles={["management"]}>
              <EmployeeList />
            </RoleProtected>
          }
        />

        {/* mahbub.................. */}

        {/* mahbub.................. */}
        {/* mahbub.................. */}
        <Route
          path="add-income"
          element={
            <RoleProtected roles={["management"]}>
              <AddIncome />
            </RoleProtected>
          }
        />

        <Route
          path="add-expenses"
          element={
            <RoleProtected roles={["management"]}>
              <AddExpenses />
            </RoleProtected>
          }
        />

        <Route
          path="report"
          element={
            <RoleProtected roles={["management"]}>
              <Report />
            </RoleProtected>
          }
        />
      </Route>
      <Route path="404" element={<NotFound />} />
    </>
  )
);

export default route;
