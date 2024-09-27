import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { useSearchParams } from "react-router-dom";
import Filter from "../components/Filter";

const Cars = () => {
  const [cars, setCars] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    const params = {
      q: searchParams.get("query"),
      _sort: "brand",
      _order: searchParams.get("sirala") === "A-Z" ? "asc" : "desc",
    };
    axios
      .get("http://localhost:3090/cars", { params })
      .then((res) => setCars(res.data))
      .catch((err) => console.log(err));
  }, [searchParams]);
  console.log(cars);

  return (
    <div className="container my-5">
      <h3 className="lead fw-bold">{cars?.length} tane araba bulundu</h3>
      <Filter />
      <div className="card-container">
        {cars?.map((car) => (
          <Card car={car} key={car.id} />
        ))}
      </div>
    </div>
  );
};

export default Cars;
