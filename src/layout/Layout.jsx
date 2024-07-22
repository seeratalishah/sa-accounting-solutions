// Layout.js
import React from "react";
import { Outlet } from "react-router-dom";
import { NavbarWithMegaMenu } from "../components/Header";
import { FooterWithSitemap } from "../components/Footer";

const Layout = () => {
  return (
    <div className="w-full max-w-[1200px] mx-auto">
      <NavbarWithMegaMenu />
      <main>
        <Outlet />
      </main>
      <FooterWithSitemap />
    </div>
  );
};

export default Layout;
