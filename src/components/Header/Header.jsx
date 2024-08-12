import React from "react";
import Navbar from "../navbar/Navbar";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src="/public/images/technest-logo.png" alt="Logo" />
      </div>
      <div className="navbar-container">
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
