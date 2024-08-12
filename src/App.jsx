import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./components/products/Products";
import About from "./pages/About";
import Footer from "./components/footer/Footer";
import Payment from "./pages/payment/Payment";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/purchase" element={<Payment />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
