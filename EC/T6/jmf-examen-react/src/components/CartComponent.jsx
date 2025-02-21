import React, { useEffect } from "react";

export default function CartComponent({ product, cart, setCart }) {
  return (
    <>
      <section>
        <h2>Productos: </h2>
        {cart.length > 0 &&
          cart.map((element) => (
            <article key={element.id}>
              <h3>{element.title}</h3>
              <b>{element.price}€</b>
              <hr />
              <p>Total: </p>
              <button>Pagar</button>
            </article>
          ))}
      </section>
    </>
  );
}
