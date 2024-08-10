import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <Link to="/about">ABOUT</Link>
          <Link to="/">BACK TO HOME</Link>
          <div className="app-download">
            <img className="play" src="/public/images/play_store.png" alt="" />
            <img className="store" src="/public/images/app_store.png" alt="" />
          </div>
        </div>
        <div className="footer-right">
          <h2>Contact Us</h2>
          <p>1234 Tech Street, Innovation City, Techland</p>
          <p>
            Email: <a href="mailto:info@technest.com">info@technest.com</a>
          </p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </div>

      <hr />
      <div className="footer-credit">
        <p>Copyright &copy; 2024 TechNest. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
