import { Link } from "react-router-dom";

const Card = ({ car }) => {
  return (
    <div className="card shadow p-1">
      <img
        className="card-img img-fluid rounded-3 "
        src={car.image}
        alt="car"
      />
      <div className="card-body w-100">
        <h3>{car.model}</h3>
        <h4>{car.brand}</h4>
        <p>
          Model Yılı: <span className="text-success">{car.year}</span>
        </p>
        <p>
          Fiyatı:
          <span className="text-primary"> {car.price} </span>
        </p>
        <strong className="badge bg-danger">{car.category}</strong>
      </div>
      <Link to={`/cars/details/${car.id}`} className="btn btn-primary w-100">
        Detayları Gör
      </Link>
    </div>
  );
};

export default Card;
