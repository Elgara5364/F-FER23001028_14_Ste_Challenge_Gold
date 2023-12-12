import React from "react";
import "./style.css";
import { useState } from "react";
import Menu from "../../assets/icon/fi_menu.png";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { HashLink } from "react-router-hash-link";
import { useNavigate, Link } from "react-router-dom";

const Sidebar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const access_Token = localStorage.getItem("Acces Token");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("Acces Token"); //hapus nama token(key) yang telah kita buat sebelumnya
    navigate("/sign-in");
  };

  return (
    <div className="sidebar">
      <Button variant="primary" className="button" onClick={handleShow}>
        <img src={Menu} alt="" />
      </Button>
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        restoreFocus={false}>
        <Offcanvas.Header className="text-reset" closeButton>
          <Offcanvas.Title>BCR</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="sidebar-list">
            <div className="list-menu d-flex flex-column align-items-start gap-3 ">
              <HashLink className="btn" to={"/#our-services1"}>
                Our Services{" "}
              </HashLink>
              <button className="btn">
                <a href="#why-us">Why Us</a>
              </button>
              <button className="btn">
                <a href="#testimony">Testimonial </a>
              </button>
              <button className="btn">
                <a href="#faq">FAQ </a>
              </button>
              {access_Token ? ( //Kondisi terlebih dahulu kemudian link
                <Link
                  onKeyDown={handleLogout}
                  to="/sign-in"
                  className="register"
                  onClick={handleLogout}>
                  Logout
                </Link>
              ) : (
                <Link className="register" to={"/register"}>
                  register
                </Link>
              )}
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default Sidebar;
