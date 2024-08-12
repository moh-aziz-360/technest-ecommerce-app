import React, { useState, useEffect } from "react";
import "./Payment.css";
import { useLocation } from "react-router-dom";

const Purchase = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const location = useLocation();

  useEffect(() => {
    // Retrieve the selected product from the location state
    const product = location.state?.product || null;
    setSelectedProduct(product);
  }, [location.state]);

  const handleRemove = () => {
    setSelectedProduct(null);
  };

  // Remove the "$" symbol and commas, then parse the price as a float
  const productPrice = selectedProduct
    ? parseFloat(selectedProduct.price.replace(/[$,]/g, ""))
    : 0;
  const shippingCost = selectedProduct ? 5.99 : 0;
  const total = productPrice + shippingCost;

  return (
    <div className="buy">
      <div className="purchase-container">
        {selectedProduct ? (
          <>
            <div className="order-summary">
              <h2>Order Summary</h2>
              <div className="item">
                <img
                  src={selectedProduct.imageSrc}
                  alt={selectedProduct.name}
                  className="selected-product-image"
                />
                <div>
                  <p>{selectedProduct.name}</p>
                </div>
                <p>${productPrice.toFixed(2)}</p>
              </div>
              <div className="item">
                <p>Shipping</p>
                <p>$5.99</p>
              </div>
              <div className="total">
                <p>Total: ${total.toFixed(2)}</p>
              </div>
            </div>

            <button className="remove-btn" onClick={handleRemove}>
              Remove
            </button>

            <div className="payment-form">
              <label htmlFor="card">Card Number</label>
              <input
                type="text"
                id="card"
                name="card"
                placeholder="Card number"
              />

              <label htmlFor="expiry">Expiry Date</label>
              <input
                type="text"
                id="expiry"
                name="expiry"
                placeholder="MM/YY"
              />

              <label htmlFor="cvc">CVC</label>
              <input type="text" id="cvc" name="cvc" placeholder="123" />
            </div>

            <button className="purchase-btn">Purchase</button>
          </>
        ) : (
          <p className="no-product-message">No Product Selected</p>
        )}
      </div>
    </div>
  );
};

export default Purchase;
