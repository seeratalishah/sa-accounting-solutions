// Layout.js
import React from "react";
import { Outlet } from "react-router-dom";
import { NavbarWithMegaMenu } from "../components/Header";
import { FooterWithSitemap } from "../components/Footer";
import GoogleMapsLocation from "../components/GoogleMapsLocation";

const Layout = () => {
  return (
    <div className="w-full">
      <div className="w-full flex justify-center shadow-b-sm fixed top-0 bg-white z-10 px-8">
        <NavbarWithMegaMenu />
      </div>
      <main>
        <Outlet />
      </main>
      <div className="w-full max-w-[1300px] mx-auto px-8 mb-[60px]">
        <GoogleMapsLocation />
      </div>
      <FooterWithSitemap />
    </div>
  );
};

export default Layout;
