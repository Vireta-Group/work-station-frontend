import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router";

export default function RoleProtected({ children, roles = [] }) {
  const user = useSelector((s) => s.user?.user);
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (!roles || roles.length === 0) {
    return children;
  }

  const userRole = user.role ?? user?.roles ?? null;

  if (!userRole || !roles.includes(userRole)) {
    return <Navigate to="/" replace />;
  }

  return children;
}
