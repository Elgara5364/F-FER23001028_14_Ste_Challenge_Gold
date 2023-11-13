import React, { useState } from "react";
import HappyGirl1 from "../../assets/Happy_Girl1.png";
import HappyGirl2 from "../../assets/Happy_Girl_combine.png";
import Check from "../../assets/icon/group53.png";
import "./style.css";

function OurService() {
  const [ourService, setOurService] = useState([
    "Sewa Mobil Dengan Supir di Bali 12 Jam",
    "Sewa Mobil Lepas Kunci di Bali 24 Jam",
    "Sewa Mobil Jangka Panjang Bulanan",
    "Gratis Antar - Jemput Mobil di Bandara",
    "Layanan Airport Transfer / Drop In Out",
  ]);

  return (
    <div className="our-services" id="our-services1">
      <div className="img-services">
        <div className="circle1"></div>
        <div className="circle2"></div>
        <div className="circle3"></div>
        <div className="group47">
          <img className="img1" src={HappyGirl2} alt="" />
          <img className="img2" src={HappyGirl1} alt="" />
        </div>
      </div>
      <div className="desc">
        <h1>Best Car Rental for any kind of trip in (Lokasimu)!</h1>
        <p>
          Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih
          murah dibandingkan yang lain, kondisi mobil baru, serta kualitas
          pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting,
          dll.
        </p>
        <div className="services">
          {ourService.map((obj) => {
            return (
              <div className="services-desc">
                <img src={Check} alt="" />
                <p>{obj}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default OurService;
