import React from "react";
import Navbar from "../fragments/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../fragments/Footer";

function AppLayouts() {
  const location = useLocation();
  const hideLayout =
    location.pathname === "/login" || location.pathname === "/signup";

  return (
    <main className="container mx-auto p-4">
      {hideLayout ? null : <Navbar />}
      <div className="w-full flex justify-center p-5 h-screen">
        <Outlet />
      </div>
    </main>
  );
}

export default AppLayouts;
