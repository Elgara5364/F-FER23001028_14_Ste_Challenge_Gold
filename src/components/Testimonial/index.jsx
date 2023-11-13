import React, { useState } from "react";
import Pic1 from "../../assets/profile1.png";
import Pic2 from "../../assets/profile2.png";
import Rate from "../../assets/icon/rate.png";
import "./style.css";

function Testimonial() {
  const [testimony, setTestimony] = useState([
    {
      fname: "john",
      lname: "doe",
      age: 32,
      rate: Rate,
      avatar: <img src={Pic1} />,
      tdescription:
        "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”",
    },
    {
      fname: "elgara",
      lname: "doe",
      rate: Rate,
      avatar: <img src={Pic2} />,
      age: 35,
      tdescription:
        "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”",
    },
    {
      fname: "loave",
      lname: "doe",
      rate: Rate,
      avatar: <img src={Pic2} />,
      age: 31,
      tdescription:
        "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”",
    },
  ]);

  return (
    <div className="testimony" id="testimony">
      <h1>Testimonial</h1>
      <p className="tdesc">Berbagai review positif dari para pelanggan kami</p>
      <div className="list-testy">
        {testimony.map((data) => (
          <div className="testy">
            {data.avatar}
            <div className="text">
              <img src={data.rate} alt="" />
              <p>{data.tdescription}</p>
              <p>
                {data.fname} {data.lname} {data.age}{" "}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonial;
