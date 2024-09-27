import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../components/Loader";

const Detail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [carDetail, setCarDetail] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3090/cars/${id}`)
      .then((res) => setCarDetail(res.data))
      .catch((err) => navigate("/undefined", { state: err.response.status }));
  }, []);

  return !carDetail ? (
    <Loader />
  ) : (
    <div className="row my-5 p-5">
      <div className="col-md-6 d-flex justify-content-center align-items-center">
        <img
          className="img-fluid shadow rounded"
          src={carDetail.image}
          alt="araba"
        />
      </div>
      <div className="col-md-6 d-flex flex-column justify-content-center align-items-start my-3">
        <h1>{carDetail.model}</h1>
        <div className="my-4">
          <CarInfo title="Marka" value={carDetail.brand} />
          <CarInfo title="Üretim Yılı" value={carDetail.year} />
          <CarInfo title="Fiyatı" value={carDetail.price} />
          <CarInfo title="Kategorisi" value={carDetail.category} />
        </div>
      </div>
    </div>
  );
};

export default Detail;

const CarInfo = ({ title, value }) => {
  return (
    <p className="fs-5">
      <span className="badge bg-danger me-2">{title}</span>
      <span>{value}</span>
    </p>
  );
};
