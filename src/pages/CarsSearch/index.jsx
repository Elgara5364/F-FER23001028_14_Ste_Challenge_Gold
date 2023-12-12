import React from "react";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CarsSearching from "../../components/CarsSearching";
import "./style.css";
// import ListCar from "../../components/ListCars";

const CarSearch = () => {
  return (
    <div className="car-search">
      {/* <h1>ini caar search</h1> */}
      <Navbar />
      <div>
        <Header />
      </div>
      <CarsSearching />
      <Footer />
    </div>
  );
};

export default CarSearch;
