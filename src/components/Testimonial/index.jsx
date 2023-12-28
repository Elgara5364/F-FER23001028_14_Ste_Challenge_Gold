import React, { useState, useRef } from "react";
import Pic1 from "../../assets/profile1.png";
import Pic2 from "../../assets/profile2.png";
import Rate from "../../assets/icon/rate.png";
import "./style.css";
import "swiper/css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper/modules";
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
      <h2>Testimonial</h2>
      <p className="tdesc">Berbagai review positif dari para pelanggan kami</p>
      <div className="list-testy">
        <Swiper
          slidesPerView={"auto"}
          centeredSlides={true}
          spaceBetween={30}
          navigation={true}
          // pagination={true}
          modules={[Navigation]}
          allowTouchMove={false}
          className="mySwiper">
          {testimony.map((data) => (
            <SwiperSlide>
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Testimonial;
