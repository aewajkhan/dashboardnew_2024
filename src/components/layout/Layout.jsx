import "./Layout.css";
import Header from "../header/Header";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import { useState } from "react";

const Layout = ({ children }) => {
 
  return (
    <div className="layout">
      <div className="navbar">
        <Header />
      </div>
      <div className="content">
        <div className={"contentLeft"}>
          <Sidebar />
        </div>

        <div className="contentRight">{children || <Outlet />}</div>
      </div>
    </div>
  );
};

export default Layout;
