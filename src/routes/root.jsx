import React from "react";
import { Outlet } from "react-router";
import AppSidebar from "../layout/AppSidebar";
import Backdrop from "../layout/Backdrop";
import AppHeader from "../layout/AppHeader";
import { useSidebar, SidebarProvider } from "../context/SidebarContext";

function LayoutContent() {
  const { isExpanded, isHovered, isMobileOpen } = useSidebar();


  return (
    <div className="min-h-screen xl:flex">
      <div>
        <AppSidebar />
        <Backdrop />
      </div>
      <div
        className={`flex-1 transition-all duration-300 ease-in-out ${
          isExpanded || isHovered ? "lg:ml-[290px]" : "lg:ml-[90px]"
        } ${isMobileOpen ? "ml-0" : ""}`}
      >
        <AppHeader />
        <div className=" mx-auto max-w-(--breakpoint-2xl) ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

function Root() {
  return (
    <SidebarProvider>
      <LayoutContent />
    </SidebarProvider>
  );
}

export default Root;
