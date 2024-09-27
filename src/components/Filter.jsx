import React from "react";
import { useSearchParams } from "react-router-dom";

const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const handleSubmit = (e) => {
    e.preventDefault();
    searchParams.set("query", e.target[0].value);
    setSearchParams(searchParams);
  };
  const handleChange = (e) => {
    searchParams.set("sirala", e.target.value);
    setSearchParams(searchParams);
  };

  return (
    <div className="d-flex justify-content-between align-items-center my-4 gap-3">
      <div>
        <select
          defaultValue={searchParams.get("sirala")}
          onChange={handleChange}
          className="form-select"
        >
          <option value="">Sırala</option>
          <option>A-Z</option>
          <option>Z-A</option>
        </select>
      </div>
      <form onSubmit={handleSubmit} className="d-flex gap-2">
        <input
          defaultValue={searchParams.get("query")}
          className="form-control"
          type="text"
          placeholder="Arayın.."
        />
        <button className="btn btn-secondary">Ara</button>
      </form>
    </div>
  );
};

export default Filter;
