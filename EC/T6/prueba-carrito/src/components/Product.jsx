import React from "react";
import { Link } from "react-router";
// import Details from "./Details";

export default function Product({ cart, setCart, product }) {
  const isInCart = cart.includes(product);

  const handleOnClick= () => {
    if (isInCart) {
      setCart(cart.filter((item) => item.id !== product.id));
    } else {
      setCart([...cart, product]);
    }
  };

  return (
    <>
      <article>
        <Link to={`/Details/${product.id}`}>
          <img src={product.image} alt={product.description} width="200px" />
        </Link>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <b>{product.price}€</b>
        <h2>{product.category}</h2>
        <button onClick={handleOnClick}>
          {isInCart ? "Añadido" : "Sin añadir"}
        </button>
      </article>
    </>
  );
}
