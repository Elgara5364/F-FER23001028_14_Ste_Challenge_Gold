import React from "react";
import "./style.css";
import { useState } from "react";
import Menu from "../../assets/icon/fi_menu.png";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { HashLink } from "react-router-hash-link";

const Sidebar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default Sidebar;
