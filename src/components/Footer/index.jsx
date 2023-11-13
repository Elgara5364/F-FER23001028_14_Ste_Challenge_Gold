import React from "react";
import "./style.css";
import Facebook from "../../assets/icon/icon_facebook.png";
import Instagram from "../../assets/icon/icon_Instagram.png";
import Twitch from "../../assets/icon/icon_twitch.png";
import Mail from "../../assets/icon/icon_mail.png";
import Twitter from "../../assets/icon/icon_twitter.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="address">
        <h5>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</h5>
        <h5>binarcarrental@gmail.com</h5>
        <h5>081-233-334-808</h5>
      </div>
      <div className="navigation">
        <a href="#our-services">
          <p> Our Services</p>
        </a>
        <a href="#why-us">
          <p>Why Us</p>
        </a>
        <a href="#testimony">
          <p>Testimonial</p>
        </a>
        <a href="#our-services">
          <p>FAQ</p>
        </a>
      </div>
      <div className="sosmed">
        <h5>Connect with us</h5>
        <div className="icon-socmed">
          <img src={Facebook} alt="" />
          <img src={Instagram} alt="" />
          <img src={Twitter} alt="" />
          <img src={Mail} alt="" />
          <img src={Twitch} alt="" />
        </div>
      </div>
      <div className="copyright">
        <h5>Copyright Binar 2022</h5>
        <Link to={"/"}>
          <div className="logo"></div>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
