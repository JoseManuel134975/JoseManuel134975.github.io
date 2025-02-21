import React, { useState } from "react";
import { Link } from "react-router";
import CartComponent from "./CartComponent";

export default function Product({ product, inCart, setInCart }) {
  const [cart, setCart] = useState([]);

  const handleOnClick = () => {
    if (inCart) {
      setInCart(false);
    } else {
      setInCart(true);
      setCart([...cart, product]);
    }
  };

  return (
    <>
      <article>
        <h2>{product.title}</h2>
        <Link to={`/Details/${product.id}`}>
          <img src={product.image} alt={product.description} width="200px" />
        </Link>
        <b>price: {product.price}</b>
        {inCart ? (
          <button className="btn btn-success" onClick={handleOnClick}>
            Añadido al carrito
          </button>
        ) : (
          <button onClick={handleOnClick} className="btn btn-danger">
            Sin añadir
          </button>
        )}
      </article>
      <CartComponent product={product} cart={cart} setCart={setCart} />
    </>
  );
}
