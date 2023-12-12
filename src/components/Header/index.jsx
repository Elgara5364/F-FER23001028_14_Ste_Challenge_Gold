import React from "react";
import bgImg from "../../assets/img_car.png";
import "./style.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="desc">
        <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
        <p>
          Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
          terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
          untuk sewa mobil selama 24 jam.
        </p>
        <div className="btn">
          <Link to={"/cars-search"}>
            <button>Mulai Sewa Mobil</button>
          </Link>
        </div>
      </div>
      <div className="img-wrapper">
        <img src={bgImg} alt="" />
      </div>
    </div>
  );
};

export default Header;
