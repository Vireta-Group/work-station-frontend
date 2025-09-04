import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";
import Root from "./root";
import LogIn from "../pages/AuthPages/LogIn";
import WorkSubmission from "../coreModule/userPanel/workSubmission/WorkSubmission";
import Dashbord from "../pages/HomeDashbord";
import AdminDashbord from "../coreModule/userPanel/adminDashbord/AdminDashbord";
import UserProfiles from "../coreModule/userPanel/userProfile/UserProfile";
import ProtectRoute from "../components/protectRoute/ProtectRoute";
import PublicRoute from "../components/protectRoute/PublicRoute";
import HrDashbord from "../coreModule/hrAdmin/hrDashbord/HrDashbord";
import HomeDashbord from "../pages/HomeDashbord";
import SupAdDashbord from "../coreModule/superAdmin/dashbord/SupAdDashbord";

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
        <Route index element={<p className="text-text-muted"> hell </p>} />
        <Route path="workSubmission" element={<WorkSubmission />} />
        <Route path="dashbord" element={<Dashbord />} />
        <Route path="adminDashbord" element={<AdminDashbord />} />
        <Route path="profile" element={<UserProfiles />} />
        <Route path="hrDashbord" element={<HrDashbord/>}/>{/* mahbub.................. */}
        <Route path="homeDashbord" element={<HomeDashbord/>} />{/* mahbub.................. */}
        <Route path="adminDashbord" element={<AdminDashbord/>}/>{/* mahbub.................. */}
        <Route path="SupAdDashbord" element={<SupAdDashbord/>}/>
      </Route>
    </>
  )
);

export default route;
