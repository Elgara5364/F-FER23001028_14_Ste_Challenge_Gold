import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Cta = () => {
  return (
    <div className="cta-banner">
      <div className="container">
        <h1>Sewa Mobil di (Lokasimu) Sekarang</h1>
        <p className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Link to={"/cars-search"}>
          <p>Mulai Sewa Mobil </p>
        </Link>
      </div>
    </div>
  );
};

export default Cta;
