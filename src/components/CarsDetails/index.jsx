import React from "react";
import "./style.css";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function CarsDetails() {
  const [includeDesc, setincludeDesc] = useState([
    "Apa saja yang termasuk dalam paket misal durasi max 12 jam ",
    "Sudah termasuk bensin selama 12 jam",
    "Sudah termasuk Tiket Wisata",
    "Sudah termasuk pajak",
  ]);

  const [excludeDesc, setexcludeDesc] = useState([
    "Tidak termasuk biaya makan sopir Rp 75.000/hari  ",
    "Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam",
    "Tidak termasuk akomodasi penginapan",
  ]);

  const [refund, setRefund] = useState([
    "Tidak termasuk biaya makan sopir Rp 75.000/hari ",
    "Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam",
    "Tidak termasuk akomodasi penginapan",
    "Tidak termasuk biaya makan sopir Rp 75.000/hari  ",
    "Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam",
    "Tidak termasuk akomodasi penginapan",
    "Tidak termasuk biaya makan sopir Rp 75.000/hari  ",
    "Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam",
    "Tidak termasuk akomodasi penginapan",
  ]);

  const [details, setDetails] = useState({});
  const param = useParams();

  useEffect(() => {
    getDetails();
  }, []);

  const getDetails = () => {
    axios
      .get(`https://api-car-rental.binaracademy.org/customer/car/${param.id}`)
      .then((res) => {
        setDetails(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="cars-details">
      <div className="desc">
        <h3>Tentang Paket</h3>
        <div className="include-desc">
          <h3>Include </h3>
          {includeDesc.map((obj) => {
            return <li>{obj}</li>;
          })}
        </div>
        <div className="exclude-desc">
          <h3>Exclude </h3>
          {excludeDesc.map((obj) => {
            return <li>{obj}</li>;
          })}
        </div>
        <div className="refund-desc">
          <h3>Refund, Reschedule, Overtime </h3>
          {refund.map((obj) => {
            return <li>{obj}</li>;
          })}
        </div>
      </div>
      <div className="details">
        <img src={details.image} alt="" />
        <div className="car-desc">
          <div className="cars-description">
            <h3>{details.name}</h3>
            <h3>Total</h3>
          </div>
          <h3>Rp {details.price}</h3>
        </div>
      </div>
    </div>
  );
}

export default CarsDetails;
