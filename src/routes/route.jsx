import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";
import Root from "./root";
import SignIn from "../pages/AuthPages/SignIn";

import AdminDashbord from "../coreModule/userPanel/adminDashbord/AdminDashbord";
import UserProfiles from "../coreModule/userPanel/userProfile/UserProfile";
import HomeDashbord from "../pages/HomeDashbord";
import HrDashbord from "../coreModule/hrAdmin/hrDashbord/HrDashbord";



const route = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* <Route path="/login" element={<LoginPage />} /> */}
      {/* <Route path="/" element={<ProtectRoute />}> */}
      <Route path="" element={<Root />}>
        <Route path="" element={<p className="text-text-muted"> hell </p>} />
        <Route path="homeDashbord" element={<HomeDashbord />} />{/* mahbub.................. */}
        <Route path="adminDashbord" element={<AdminDashbord/>}/>{/* mahbub.................. */}
        <Route path="signIn" element={<SignIn></SignIn>} />
        <Route path="profile" element={<UserProfiles />} />
        <Route path="hrDashbord" element={<HrDashbord/>}/>{/* mahbub.................. */}
      </Route>

    </>
  )
);

export default route;
