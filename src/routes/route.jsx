import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";
import Root from "./root";
import HeaderNav from "../components/headerNavbar/headerNav";
import UserDashboard from "../coreModule/userPanel/userDashbord/UserDashbord";


const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="about" element={<p className="text-red-500"> hell </p>} />
      <Route path="userDashbord" element={<UserDashboard/>}/>

    </Route>
  )
);

export default route;
