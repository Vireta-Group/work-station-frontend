import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";
import Root from "./root";
import AddEmployee from "../coreModule/hrAdmin/addEmployee/AddEmployee";
import { Home } from "@mui/icons-material";
import Dashbord from "../pages/Home";
// import LoginPage from "../components/loginPage/LoginPage.jsx";
// import ProtectRoute from "./ProtectRoute.jsx";
// import WorkDis from "../coreModule/teamAdminPanel/workDistrubition/WorkDis.jsx";
// import EWorkDetail from "../coreModule/teamAdminPanel/EWorkDetail/EWorkDetail.jsx";

const route = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* <Route path="/login" element={<LoginPage />} /> */}
      {/* <Route path="/" element={<ProtectRoute />}> */}
      <Route path="" element={<Root />}>
        <Route path="" element={<p className="text-text-muted"> hell </p>} />
        <Route path="employee-form" element={<AddEmployee />} />
        <Route path="dashbord" element={<Dashbord />} />
        {/* <Route path="work-dis" element={<WorkDis />} />
          <Route path="e-work" element={<EWorkDetail />} /> */}
      </Route>
      {/* </Route> */}
    </>
  )
);

export default route;
