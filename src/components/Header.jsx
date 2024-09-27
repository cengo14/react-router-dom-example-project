import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 fs-3">
          <Link to="/" className="text-dark">
            ARABAM<span className="text-warning">VİRGÜL</span>COM
          </Link>
        </span>
        <div className="d-flex gap-2">
          <NavLink className="p-2 text-danger" to="/">
            Anasayfa
          </NavLink>
          <NavLink className="p-2 text-danger" to="/cars">
            Arabalar
          </NavLink>
          <NavLink className="p-2 text-danger" to="/categories">
            Kategoriler
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
