import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";
import Root from "./root";
import LoginPage from "../components/loginPage/LoginPage.jsx";
import ProtectRoute from "./ProtectRoute.jsx";

const route = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<ProtectRoute />}>
        <Route path="" element={<Root />}>
          <Route path="" element={<p className="text-red-500"> hell </p>} />
        </Route>
      </Route>
    </>
  )
);

export default route;
