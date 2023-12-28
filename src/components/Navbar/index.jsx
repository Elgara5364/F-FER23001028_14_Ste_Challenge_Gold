import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar";

const Navbar = () => {
  const access_Token = localStorage.getItem("Acces Token");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("Acces Token"); //hapus nama token(key) yang telah kita buat sebelumnya
    navigate("/register");
  };

  return (
    <div className="navbar sticky-top">
      <Link to={"/"}>
        <div className="logo"></div>
      </Link>
      <div className="container-button">
        <Sidebar />
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
            <Link className="register" to={"/register"}>
              register
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
