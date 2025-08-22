import React from "react";
import { Outlet } from "react-router";
import HeaderNav from "../components/headerNavbar/headerNav";
import Sidebar from "../components/sidebar/Sidebar";

function Root() {
  return (
    <>
      <HeaderNav />
      <div className="flex relative ">
        <Sidebar />
        <div className="mt-20 ml-[270px] flex justify-center w-[100%]">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Root;
