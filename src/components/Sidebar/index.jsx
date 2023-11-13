import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Menu from "../../assets/icon/fi_menu.png";
import Close from "../../assets/icon/fi_x.png";

const Sidebar = () => {
  const [showSidebar, setshowSidebar] = useState(false);

  const handleSidebar = () => {
    setshowSidebar(!showSidebar);
  };

  return (
    <>
      <div className="overlay"></div>
      <div className="sidebar">
        <h4>BCR</h4>
        <div className="list-menu">
          <a onClick={handleSidebar} href="#our-services">
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
      </div>
    </>
  );
};

export default Sidebar;
