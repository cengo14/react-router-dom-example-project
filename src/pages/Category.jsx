import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Category = () => {
  const apiUser = { name: "cengiz", role: "admin" };
  if (apiUser.role !== "admin") return "Aradığınız sayfa bulunamadı";
  return (
    <div className="d-flex align-items-center gap-4 p-5">
      <aside className="d-flex flex-column bg-dark text-white p-5 rounded-4">
        <NavLink className="text-danger" to={`/categories/hikaye`}>
          Hikaye
        </NavLink>
        <NavLink className="text-danger" to={`/categories/roman`}>
          Roman
        </NavLink>
      </aside>
      <Outlet />
    </div>
  );
};

export default Category;
