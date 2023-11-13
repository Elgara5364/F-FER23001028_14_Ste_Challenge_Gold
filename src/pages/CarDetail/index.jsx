import React from "react";
import Navbar from "../../components/Navbar";
import CarsSearching from "../../components/CarsSearching";
import "./style.css";
import CarsDetails from "../../components/CarsDetails";
import Footer from "../../components/Footer";

const CarDetail = () => {
  return (
    <div className="car-detail">
      <div className="navbar-car-detail">
        <Navbar />
      </div>
      <div className="car-searching">
        <CarsSearching />
      </div>
      <CarsDetails />
      <Footer />
    </div>
  );
};

export default CarDetail;
