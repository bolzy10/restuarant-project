import React from "react";
import { Link } from "react-router-dom";
import restaurant1 from "../assets/restaurant1.jpg";
import "../styles/Home.css";

function Homes() {
  return (
    <div className="home" style={{ backgroundImage: `url(${restaurant1})` }}>
      <div className="headerContainer">
        <h1> ProtegeX </h1>
        <p> DELICACY TO FIT ANY TASTE</p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Homes;
