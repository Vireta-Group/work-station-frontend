import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";
import Root from "./root";
import HeaderNav from "../components/headerNavbar/headerNav";


const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="about" element={<p className="text-red-500"> hell </p>} />
      <Route path="headerNav" element={<HeaderNav/>}></Route>
    </Route>
  )
);

export default route;
