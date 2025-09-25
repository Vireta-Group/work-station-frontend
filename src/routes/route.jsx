import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";
import Root from "./root";
import AddEmployee from "../coreModule/hrAdmin/addEmployee/AddEmployee";
import LogIn from "../pages/AuthPages/LogIn";
import WorkSubmission from "../coreModule/userPanel/workSubmission/WorkSubmission";
// import Dashbord from "../pages/HomeDashbord";
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
// import WorkDistributionForm from "../coreModule/teamAdminPanel/workDistrubition/WorkDis";
import WorkGroup from "../coreModule/teamAdminPanel/WorkDistribution/WorkGroup";

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
        <Route path="employeeStatus" element={<EmployeePersonalPage />} />
        <Route path="workDistribution" element={<WorkGroup />} />
        {/* <Route path="workDistribution" element={<WorkDistributionForm />} /> */}
        <Route path="employeeAttendence" element={<UserAttendence />} />
        <Route path="hrDashbord" element={<HrDashbord />} />
        {/* mahbub.................. */}
        <Route index element={<HomeDashbord />} />
        {/* mahbub.................. */}
        <Route path="adminDashbord" element={<AdminDashbord />} />
        {/* mahbub.................. */}
        <Route path="employee-form" element={<AddEmployee />} />
        <Route path="teamadminpanel" element={<TeamAdminPanel />} />
        {/* mahbub.................. */}
        <Route path="employeeList" element={<EmployeeList />} />
        <Route path="taskhistory" element={<TaskHistory />} />
        <Route path="editemployee" element={<EditEmployeeDashboard />} />
        <Route path="viewmodal" element={<EmployeeViewModal />} />
        <Route path="addDepartment" element={<AddDepartment />} />
        <Route path="addTeamLeader" element={<AddTeamLeader />} />
        <Route path="SupAdDashbord" element={<SupAdDashbord />} />
        {/* mahbub.................. */}
      </Route>
    </>
  )
);

export default route;
