import React from "react";

export default function DetailsProduct({ product }) {
  return (
    <>
      <article>
        <img src={product.image} alt={product.description} />
        <h2>{product.title}</h2>
        <h3>category: {product.category}</h3>
        <b>price: {product.price}</b>
      </article>
    </>
  );
}
