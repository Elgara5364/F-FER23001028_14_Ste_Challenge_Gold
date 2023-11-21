import React from "react";
import Home from "./pages/Home";
import CarSearch from "./pages/CarsSearch";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CarDetail from "./pages/CarDetail";
import Register from "./pages/Register";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars-search" element={<CarSearch />} />
        <Route path="/cars-details/:id" element={<CarDetail />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
