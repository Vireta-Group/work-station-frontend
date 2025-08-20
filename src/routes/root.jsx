import React from "react";
import { Outlet } from "react-router";
import HeaderNav from "../components/headerNavbar/headerNav";

function Root() {
  return (
    <div>
     <HeaderNav/>
    
      <Outlet />
    </div>
  );
}

export default Root;
