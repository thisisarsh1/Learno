import React from "react";
import SideNav from "./components/SideNav";
import Header from "./components/Header";

function layout({ children }) {
  return (
    <div className="mt-1">
      <SideNav></SideNav>
      <div className="sm:ml-[18.5rem]">
        <Header></Header>
        {children}
        </div>
    </div>
  );
}

export default layout;
