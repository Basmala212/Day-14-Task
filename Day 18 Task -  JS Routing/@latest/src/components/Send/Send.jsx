import React, { useState } from "react";
import Recieve from "../Recieve/Recieve";

export default function Send() {
  let prodArray = [
    {
      id: 1,
      pName: "Samsung",
      price: 5000,
      onSale: true,
      desc: "good",
      counter: 0,
    },
    {
      id: 2,
      pName: "Oppo",
      price: 2000,
      onSale: false,
      desc: "good",
      counter: 0,
    },
    {
      id: 3,
      pName: "TV",
      price: 6000,
      onSale: false,
      desc: "good",
      counter: 0,
    },
    {
      id: 4,
      pName: "PC",
      price: 8000,
      onSale: true,
      desc: "good",
      counter: 0,
    },
    {
      id: 5,
      pName: "Mouse",
      price: 1000,
      onSale: true,
      desc: "good",
      counter: 0,
    },
    {
      id: 6,
      pName: "Pods",
      price: 500,
      onSale: false,
      desc: "good",
      counter: 0,
    },
  ];
  let [products, setProducts] = useState(prodArray);

  function deleteProd(prodId) {
    let newProducts = products.filter((product) => product.id !== prodId);
    setProducts(newProducts);
  }

  return (
    <>
      <div>
        Parent
        <div className="container text-2xl bg-info p-4">
          <div className="row">
            {products.map((product) => (
              <Recieve product={product} delProd={deleteProd} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}