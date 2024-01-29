import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { useNavigate, Link } from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import "../styles/Navbar.css";
import useLogout from "../hooks/useLogout";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  const navigate = useNavigate();
    const logout = useLogout();

    const signOut = async () => {
        await logout();
        navigate('/login');
    }
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} alt="" />
        <div className="hiddenLinks">
          <Link to="/res"> Home </Link>
          <Link to="/menu"> Menu </Link>
          <Link to="/about"> About </Link>
          <Link to="/contact"> Contact </Link>
          <button className="signoutbuthide" onClick={signOut}>Sign Out</button>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/res"> Home </Link>
        <Link to="/menu"> Menu </Link>
        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact </Link>
        <button className="signoutbut" onClick={signOut}>Sign Out</button>
        <button className="tognav" onClick={toggleNavbar}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
