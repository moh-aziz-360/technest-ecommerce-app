import React from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="products" smooth={true} duration={500}>
            Products
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Get in Touch
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
