import React from "react";
import "./About.css";

const About = () => {
  return (
    <>
      <img className="logo" src="/public/images/technest.png" alt="logo" />
      <div className="about">
        <h2>About Us</h2>
        <p className="intro">
          TechNest is the ultimate online marketplace for cutting-edge
          technology and innovative gadgets. We bring you a curated selection of
          the latest tech products that cater to both enthusiasts and everyday
          users alike. From high-performance electronics to essential
          accessories, <br />
          TechNest has everything you need to stay connected and ahead of the
          curve in the tech world.
        </p>
        <h2>What We Offer</h2>
        <ul className="info">
          <h3>
            <strong>Premium Laptops & PCs:</strong>
          </h3>
          <li>
            Explore our range of laptops and desktops designed for gaming,
            professional work, and everyday use, featuring the latest technology
            and top-tier performance.
          </li>
          <h3>
            {" "}
            <strong>Smartphones & Tablets:</strong>
          </h3>
          <li>
            Find the newest smartphones and tablets from leading brands,
            offering advanced features, high performance, and sleek designs.
          </li>
          <h3>
            <strong>Tech Accessories:</strong>
          </h3>
          <li>
            Enhance your tech setup with a variety of accessories, including
            high-quality headphones, durable chargers, stylish cases, and more.
          </li>
          <h3>
            <strong>Gaming Essentials:</strong>
          </h3>
          <li>
            Dive into our extensive collection of gaming gear, from gaming PCs
            and consoles to high-resolution monitors and ergonomic chairs.
          </li>
        </ul>
      </div>
    </>
  );
};

export default About;
