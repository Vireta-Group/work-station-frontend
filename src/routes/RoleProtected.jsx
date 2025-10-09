import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router";
import { user } from "../features/user/userSlice";

export default function RoleProtected({ children, roles = [] }) {
  // const dispatch = useDispatch();
  // const userData = useSelector((data) => data.user).user;

  // if (userData === null) {
  //   dispatch(user());
  // }
  // console.log(userData?.department);

  // if (!roles || roles.length === 0) {
  //   return children;
  // }

  // const userRole = userData?.department ?? userData?.department ?? null;

  // if (userRole) {
  //   if (!userRole || !roles.includes(userRole)) {
  //     return <Navigate to="/" replace />;
  //   }
  // }

  return children;
}
