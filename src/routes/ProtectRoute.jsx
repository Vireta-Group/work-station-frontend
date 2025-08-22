import React from "react";
import { Outlet } from "react-router";

function ProtectRoute() {
  const userLogin = true;
  if (userLogin) {
    return <Outlet />;
  }
  return <Navigate to="/login" />;
}

export default ProtectRoute;
