import React from "react";
import Navbar from "./Nav/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="w-[1440px] px-28 mx-auto">
      <Navbar />
      <Outlet></Outlet>
    </div>
  );
};

export default Layout;
