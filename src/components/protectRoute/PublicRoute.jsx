// components/publicRoute/PublicRoute.jsx
import { useSelector } from "react-redux";
import { Navigate } from "react-router";

function PublicRoute({ children }) {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  return isAuth ? <Navigate to="/" /> : children;
}

export default PublicRoute;