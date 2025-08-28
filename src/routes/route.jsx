import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";
import Root from "./root";
import SignIn from "../pages/AuthPages/SignIn";
import WorkSubmission from "../coreModule/userPanel/workSubmission/WorkSubmission";
// import LoginPage from "../components/loginPage/LoginPage.jsx";
// import ProtectRoute from "./ProtectRoute.jsx";
// import WorkDis from "../coreModule/teamAdminPanel/workDistrubition/WorkDis.jsx";
// import EWorkDetail from "../coreModule/teamAdminPanel/EWorkDetail/EWorkDetail.jsx";

import Dashbord from "../pages/Home";
import AdminDashbord from "../coreModule/userPanel/adminDashbord/AdminDashbord";
import UserProfiles from "../coreModule/userPanel/userProfile/UserProfile";


const route = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="signIn" element={<SignIn />} />
      {/* <Route path="/" element={<ProtectRoute />}> */}
      <Route path="" element={<Root />}>
        <Route path="" element={<p className="text-text-muted"> hell </p>} />
        <Route path="workSubmission" element={<WorkSubmission />} />
        <Route path="dashbord" element={<Dashbord />} />
        <Route path="adminDashbord" element={<AdminDashbord />} />
        <Route path="profile" element={<UserProfiles />} />
      </Route>
    </>
  )
);

export default route;
