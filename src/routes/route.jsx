import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";
import Root from "./root";
import AddEmployee from "../coreModule/hrAdmin/addEmployee/AddEmployee";
import { Home } from "@mui/icons-material";
import SignIn from "../pages/AuthPages/SignIn";
import Dashbord from "../pages/Home";
import AdminDashbord from "../coreModule/userPanel/adminDashbord/AdminDashbord";
import UserProfiles from "../coreModule/userPanel/userProfile/UserProfile";
// import WorkDistribution from "../coreModule/WorkDistribution/WorkDistribution";
import TeamAdminPanel from "../coreModule/teamAdminPanel/TeamAdminPanel";

const route = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="signIn" element={<SignIn></SignIn>} />
      {/* <Route path="/" element={<ProtectRoute />}> */}
      <Route path="" element={<Root />}>
        <Route path="" element={<p className="text-text-muted"> hell </p>} />
        <Route path="employee-form" element={<AddEmployee />} />
        <Route path="dashbord" element={<Dashbord />} />

        <Route path="dashbord" element={<Dashbord />} />
        <Route path="adminDashbord" element={<AdminDashbord />} />

        <Route path="dashbord" element={<Dashbord />} />
        <Route path="profile" element={<UserProfiles />} />

        <Route path="teamadminpanel" element={<TeamAdminPanel />} />
      </Route>
    </>
  )
);

export default route;
