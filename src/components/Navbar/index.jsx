import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import "./style.css";
import { Link } from "react-router-dom";
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
      <Link to={"/home"}>
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
        <HashLink to="/home#our-services1">
          <p> Our Services</p>
        </HashLink>
        <HashLink to="/home#why-us">
          <p>Why Us</p>
        </HashLink>
        <HashLink to="/home#testimony">
          <p>Testimonial</p>
        </HashLink>
        <HashLink to="/home#faq">
          <p>FAQ</p>
        </HashLink>
      </div>
    </div>
  );
};

export default Navbar;
