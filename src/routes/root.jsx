import React from "react";
import { Outlet } from "react-router";
import HeaderNav from "../components/headerNavbar/HeaderNav"
import Sidebar from "../components/sidebar/Sidebar";

function Root() {
  return (
    <>
      <HeaderNav />
      <div className="flex relative ">
        <Sidebar />
        <div className="pt-30 pl-[220px] flex justify-center w-[100%]">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Root;
