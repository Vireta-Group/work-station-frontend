import React from "react";
import { Outlet } from "react-router";
import HeaderNav from "../components/headerNavbar/HeaderNav"
import Sidebar from "../components/sidebar/Sidebar";

function Root() {
  return (
    <>
      <HeaderNav></HeaderNav>
      <div className="flex">
        <Sidebar  />
        <Outlet />
      </div>
    </>
  );
}

export default Root;
