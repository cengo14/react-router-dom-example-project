import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Undefined = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="w-75 mx-auto">
      <img
        className="img-fluid w-100"
        src="https://atlassianblog.wpengine.com/wp-content/uploads/2017/12/44-incredible-404-error-pages@3x-768x374.png"
        alt=""
      />
      {location.state && (
        <h4 className="text-center my-4">Hata kodu {location.state}</h4>
      )}
      <div className="d-flex justify-content-center mt-3">
        <h2>Üzgünüz aradığınız sayfaya ulaşamadık :(</h2>
      </div>

      <div className="d-flex justify-content-center mt-3">
        <button
          onClick={() => navigate("/")}
          className="btn btn-warning text-center"
        >
          AnaSayfaya Dön
        </button>
      </div>
    </div>
  );
};

export default Undefined;
