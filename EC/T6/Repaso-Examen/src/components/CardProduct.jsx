import React, { useEffect, useState } from "react";
import { Link } from "react-router";

export default function CardProduct({ product, localCart, setLocalCart }) {
  const [inCart, setInCart] = useState(false);

  const handleAddToCart = (event) => {
    setInCart(true);
    setLocalCart({
      ...localCart,
      cart: [...localCart.cart, product],
      totalProducts: localCart.totalProducts + 1,
    });
  };

  const handleDeleteFromCart = (event) => {
    setInCart(false);
    setLocalCart({
      ...localCart,
      cart: localCart.cart.filter((element) => element.id !== product.id),
      totalProducts: localCart.totalProducts - 1,
    });
  };

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    setLocalCart(storedCart);
  }, []);

  return (
    <>
      <article className="col col-6 d-flex flex-column justify-content-center align-items-center">
        <h2>{product.title}</h2>
        <Link to={`/Details/${product.id}`}>
          <img
            className="img-fluid"
            src={product.image}
            alt={product.description}
            width="200px"
          />
        </Link>
        <div>
          <b>price: {product.price}</b>
          {inCart ? (
            <button onClick={handleDeleteFromCart} className="btn btn-success">
              Añadido
            </button>
          ) : (
            <button onClick={handleAddToCart} className="btn btn-danger">
              No añadido
            </button>
          )}
        </div>
      </article>
    </>
  );
}
