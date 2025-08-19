import React from "react";
import { Outlet } from "react-router";

function Root() {
  return (
    <div>
      <h1>Root Layout</h1>
      <Outlet />
    </div>
  );
}

export default Root;
