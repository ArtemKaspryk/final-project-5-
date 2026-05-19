import React from "react";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import "./Footer.css";
import logo from '../../assets/headerLogo.png'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section left">
        <img src={logo} alt="" />
      </div>

      <div className="footer-section center">
        <h3>Address</h3>
        <p>Svobody str. 35<br />Kyiv, Ukraine</p>
      </div>

      <div className="footer-section right">
        <h3>Contact us</h3>
        <div className="icons">
          <FaInstagram className="icon" />
          <FaFacebook className="icon" />
          <FaWhatsapp className="icon" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
