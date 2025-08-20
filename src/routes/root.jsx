import React from "react";
import { Outlet } from "react-router";
import HeaderNav from "../components/headerNavbar/headerNav";
import Sidebar from "../components/sidebar/Sidebar";

function Root() {
  return (
    <div>
      <HeaderNav />
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default Root;
