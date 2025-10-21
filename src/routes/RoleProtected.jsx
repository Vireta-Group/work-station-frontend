import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router";
import { user } from "../features/user/userSlice";
import { useEffect } from "react";

export default function RoleProtected({ children, roles = [], isLeader }) {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user).user;

  useEffect(() => {
    if (userData === null) {
      dispatch(user());
    }
  }, [userData, dispatch]);

  if (userData === null) {
    return <div>Loading...</div>;
  }

  if (!roles || roles.length === 0) {
    return children;
  }

  const userRole = userData?.department ?? null;

  if (!userRole || !roles.includes(userRole)) {
    return <Navigate to="/" replace />;
  }

  if (roles.includes("frontend")) {
    if (isLeader && userData?.role === "teamleader") {
      return children;
    } else if (roles.includes("managment") || roles.includes("hr")) {
      return children;
    } else {
      return <Navigate to="/" replace />;
    }
  }

  return children;
}
