import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container my-5 d-flex flex-column gap-5 align-items-center">
      <h1 className="">Hoş Geldiniz..</h1>
      <img className="img-fluid" src="\public\image.png" alt="welcome" />
      <p className="lead ">
        <Link
          to="/Cars"
          className="text-dark lead text-decoration-underline me-2"
        >
          Arabalar
        </Link>
        sayfasında yeni çıkan ve mevcut araba modellerine ulaşabilirsiniz
      </p>
    </div>
  );
};

export default Home;
