import React from "react";

export default function Recieve({ product, delProd }) {
    console.log(product);
  let { id, pName, price, desc, counter, onSale } = product;
  return (
    <>
      <div className="col-md-3">
        <div className="bg-warning item shadow-lg p-4 position-relative rounded">
          <h2>Prod Name: {pName}</h2>
          <h2>Prod Price: {price}</h2>
          <p>Prod Desc: {desc}</p>
          <h4>Counter: {counter}</h4>

          {onSale ? (<span className="badge bg-danger p-2 position-absolute top-0 end-0">OnSale</span>) : ("")}
          {onSale && (
            <span className="badge bg-danger p-2 position-absolute top-0 end-0">
              OnSale
            </span>
          )}
          <div className="d-flex justify-content-between my-3">
            <button className="btn btn-danger" onClick={() => delProd(id)}>
              Delete
            </button>
            <button className="btn btn-primary">Update Counter</button>
          </div>
        </div>
      </div>
    </>
  );
}