import React, { useState } from "react";

export default function Child({ productDetails, onAddToCart }) {
  const [quantity, setQuantity] = useState(0);

  function handleAdd() {
    setQuantity(prev => prev + 1);
    onAddToCart(productDetails);
  }

  return (
    <div className="bg-light p-3 rounded">
      <h2>Product Details</h2>
      <p><strong>Name:</strong> {productDetails.pName}</p>
      <p><strong>Price:</strong> ${productDetails.price}</p>
      <p><strong>Type:</strong> {productDetails.prodType}</p>
      <p><strong>Available:</strong> {productDetails.count} pieces</p>
      <p><strong>On Sale:</strong> {productDetails.onSale ? "Yes" : "No"}</p>

      <button className="btn btn-success mt-2" onClick={handleAdd}>
        Add One to Cart
      </button>

      <p className="mt-2">You added <strong>{quantity}</strong> piece(s) of this item.</p>
    </div>
  );
}
