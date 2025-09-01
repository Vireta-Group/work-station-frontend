import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";
import Root from "./root";
import LogIn from "../pages/AuthPages/LogIn";
import WorkSubmission from "../coreModule/userPanel/workSubmission/WorkSubmission";
import Dashbord from "../pages/Home";
import AdminDashbord from "../coreModule/userPanel/adminDashbord/AdminDashbord";
import UserProfiles from "../coreModule/userPanel/userProfile/UserProfile";
import ProtectRoute from "../components/protectRoute/ProtectRoute";
import PublicRoute from "../components/protectRoute/PublicRoute";

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
      </Route>
    </>
  )
);

export default route;
