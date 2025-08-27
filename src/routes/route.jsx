import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";
import Root from "./root";
import SignIn from "../pages/AuthPages/SignIn";
import Dashbord from "../pages/Home";
import AdminDashbord from "../coreModule/userPanel/adminDashbord/AdminDashbord";
import UserProfiles from "../coreModule/userPanel/userProfile/UserProfile";


const route = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* <Route path="/login" element={<LoginPage />} /> */}
      {/* <Route path="/" element={<ProtectRoute />}> */}
      <Route path="" element={<Root />}>
        <Route path="" element={<p className="text-text-muted"> hell </p>} />
        <Route path="dashbord" element={<Dashbord/>}/>
        <Route path="adminDashbord" element={<AdminDashbord/>}/>
        <Route path="signIn" element={<SignIn></SignIn>} />
        <Route path="dashbord" element={<Dashbord />} />
        <Route path="profile" element={<UserProfiles />} />
      </Route>

    </>
  )
);

export default route;
