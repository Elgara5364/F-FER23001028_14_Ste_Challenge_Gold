import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { faL } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../Sidebar";
import Menu from "../../assets/icon/fi_menu.png";
import Close from "../../assets/icon/fi_x.png";
// import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  const [showSidebar, setshowSidebar] = useState(false);

  const handleSidebar = () => {
    setshowSidebar(!showSidebar);
  };

  return (
    <div className="navbar">
      <Link to={"/"}>
        <div className="logo"></div>
      </Link>
      <div className="ham-menu">
        {showSidebar && <Sidebar />}
        <button onClick={handleSidebar}>
          {!showSidebar ? (
            <img className="menu" src={Menu} alt="" />
          ) : (
            <img className="close" src={Close} />
          )}
        </button>
      </div>
      <div className="nav-list">
        {/* {!showSidebar ? <img src={Menu} alt="" /> : <img src={Close} />} */}
        <a onClick={handleSidebar} href="/#our-services">
          <p> Our Services</p>
        </a>
        <a href="/#why-us">
          <p>Why Us</p>
        </a>
        <a href="/#testimony">
          <p>Testimonial</p>
        </a>
        <a href="/#our-services">
          <p>FAQ</p>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
