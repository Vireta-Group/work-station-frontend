import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";
import Root from "./root";
import LoginPage from "../components/loginPage/LoginPage.jsx";
import ProtectRoute from "./ProtectRoute.jsx";
import UserDashboard from "../coreModule/userPanel/userDashbord/UserDashbord.jsx";
import EProfile from "../coreModule/userPanel/employProfile/EProfile.jsx";
import WorkDis from "../coreModule/teamAdminPanel/workDistrubition/WorkDis.jsx";
import EWorkDetail from "../coreModule/teamAdminPanel/EWorkDetail/EWorkDetail.jsx";
import TaskSubmit from "../coreModule/userPanel/taskSubmit/TaskSubmit.jsx";

const route = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<ProtectRoute />}>
        <Route path="" element={<Root />}>
          <Route path="" element={<p className="text-red-500"> hell </p>} />
          <Route path="userDashbord" element={<UserDashboard/>}/>
          <Route path="eprofile" element={<EProfile/>}/>
          <Route path="work-dis" element={<WorkDis />} />
          <Route path="e-work" element={<EWorkDetail />} />
         <Route path="taskSubmit" element={<TaskSubmit />} />
        </Route>

      </Route>
    </>
  )
);

export default route;
