import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";
import Root from "./root";
import Dashbord from "../pages/Home";
import UserProfiles from "../coreModule/userPanel/userProfile/UserProfile";

const route = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* <Route path="/login" element={<LoginPage />} /> */}
      {/* <Route path="/" element={<ProtectRoute />}> */}
      <Route path="" element={<Root />}>
        <Route path="" element={<p className="text-text-muted"> hell </p>} />
        <Route path="dashbord" element={<Dashbord />} />
        <Route path="profile" element={<UserProfiles />} />
      </Route>
      {/* </Route> */}
    </>
  )
);

export default route;
