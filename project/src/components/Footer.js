import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faInstagram, faTwitter, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faLinkedin} />

      </div>
      <p> &copy; 2024 protegex.com</p>
    </div>
  );
}

export default Footer;
