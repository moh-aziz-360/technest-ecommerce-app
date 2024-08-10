import React from "react";
import Header from "../components/Header/Header";
import Hero from "../components/hero/Hero";
import Products from "../components/products/Products";

const Home = () => {
  return (
    <div>
      <Header />
      <div id="home">
        <Hero />
      </div>
      <div id="products">
        <Products limit={3} />
      </div>
      <div id="contact">{/* Contact section or component */}</div>
    </div>
  );
};

export default Home;
