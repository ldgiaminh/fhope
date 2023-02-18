import React from "react";
import { Link } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";
import FormOne from "./../../component/contact/FormOne";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaBehance,
  FaPhone,
  FaFax,
} from "react-icons/fa";
import FormLogin from "../../component/contact/FormLogin";

const OffcanvasLogin = ({ offcanvasShow, offcanvasHide }) => {
  return (
    <Offcanvas
      show={offcanvasShow}
      onHide={offcanvasHide}
      placement="end"
      className="header-offcanvasmenu"
    >
      <Offcanvas.Header closeButton></Offcanvas.Header>
      <Offcanvas.Body>
        <h3>Đăng nhập</h3>
        <FormLogin />
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default OffcanvasLogin;
