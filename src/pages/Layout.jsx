import React from "react";
import Header from "../components/Header";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "../components/Footer";

const Layout = () => {
  const data = useLoaderData();
  console.log("veri geldi", data);

  return (
    <div className="page">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
