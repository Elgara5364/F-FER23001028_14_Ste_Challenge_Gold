import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar";
import Menu from "../../assets/icon/fi_menu.png";
import Close from "../../assets/icon/fi_x.png";

const Navbar = () => {
  const [showSidebar, setshowSidebar] = useState(false);

  const handleSidebar = () => {
    setshowSidebar(!showSidebar);
  };

  const access_Token = localStorage.getItem("access_token");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("access_token"); //hapus nama token(key) yang telah kita buat sebelumnya
    navigate("./register");
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
        <HashLink to="/#our-services1">
          <p> Our Services</p>
        </HashLink>
        <HashLink to="/#why-us">
          <p>Why Us</p>
        </HashLink>
        <HashLink to="/#testimony">
          <p>Testimonial</p>
        </HashLink>
        <HashLink to="/#faq">
          <p>FAQ</p>
        </HashLink>
        {access_Token ? ( //Kondisi terlebih dahulu kemudian link
          <HashLink
            onKeyDown={handleLogout}
            className="register"
            to="/register"
            onClick={handleLogout}>
            <p>Logout</p>
          </HashLink>
        ) : (
          <Link onKeyDown={"/register"} className="register" to={"/register"}>
            register
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
