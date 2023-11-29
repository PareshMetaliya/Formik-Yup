import React from "react";
import { Link } from "react-router-dom";
import "../style/Navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
}

export default Navbar;
