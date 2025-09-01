import { useSelector } from "react-redux";
import { Navigate } from "react-router";

function ProtectRoute({ children }) {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default ProtectRoute;
