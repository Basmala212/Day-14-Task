import React, { useState } from "react";
import Child from "../Child/Child";

export default function Parent() {
  const [product] = useState({
    id: 1,
    count: 235,
    pName: "Samsung",
    prodType: "Mobile",
    price: 5000,
    onSale: true,
  });

  const [cart, setCart] = useState([]);
  const [totalItems, setTotalItems] = useState(0);

  function addToCart(productItem) {
    setCart(prevCart => [...prevCart, productItem]);
    setTotalItems(prev => prev + 1);
  }

  return (
    <div className="bg-info p-4">
      <h1 className="h2">Parent</h1>

      <Child productDetails={product} onAddToCart={addToCart} />

      <hr />
      <h3>🛒 Cart Summary</h3>
      <p><strong>Total Items:</strong> {totalItems}</p>

      {cart.length === 0 ? (
        <p>No items added yet.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.pName} - ${item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
