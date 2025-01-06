import React from "react";
import Navbar from "../../pages/navbar";
import { Outlet } from "react-router-dom";
import Footer from "../../pages/footer";
import CaruselComponent from "../carusel";

const Layout: React.FC = () => {
  return (
    <div className="contiener">
      <Navbar />
      <main>
        <Outlet />
        <div className="my-4 ">

        <CaruselComponent />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
