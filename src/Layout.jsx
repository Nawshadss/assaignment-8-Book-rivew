import React from "react";
import Navbar from "./Nav/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="max-w-[1440px] md:px-12 lg:px-28 mx-auto">
      <Navbar />
      <Outlet></Outlet>
    </div>
  );
};

export default Layout;
