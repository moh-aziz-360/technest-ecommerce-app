import React from "react";
import { useNavigate } from "react-router-dom";
import productList from "../../../src/ProductList.json";
import "./ProductList.css";

const Products = () => {
  const navigate = useNavigate();

  const handleBuyNowClick = (product) => {
    navigate("/purchase", { state: { product } }); // Pass product data via state
  };

  return (
    <>
      <h1>YOUR USER-FRIENDLY DEVICES</h1>
      <hr />
      <div className="products-container">
        {productList.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.imageSrc}
              alt={product.name}
              className="product-image"
            />
            <h2 className="product-name">{product.name}</h2>
            <p className="product-description">{product.description}</p>
            <p className="product-price">{product.price}</p>
            <button onClick={() => handleBuyNowClick(product)}>Buy now</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
