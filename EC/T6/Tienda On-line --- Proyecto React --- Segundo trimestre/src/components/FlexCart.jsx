import React from "react";
import { useState, useEffect } from "react";

export default function FlexCart() {
  const [cart, setCart] = useState({
    numberProducts: 0,
    cartProducts: [],
  });
  const [totalPrice, setTotalPrice] = useState(0);
  const localCart = JSON.parse(localStorage.getItem("cart"));

  useEffect(() => {
    async function fetchData() {
      const prices = localCart.cartProducts.map((element) => {
        return element.price;
      });
      const sumWithInitial = prices.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        totalPrice
      );
      setTotalPrice(sumWithInitial);
      setCart({ ...cart, cartProducts: [...localCart.cartProducts] });
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
    fetchData();
  }, [cart.cartProducts]);

  const deleteFromCart = (event) => {
    cart.cartProducts.map((element) => {
      if (element.id === event.target.id) {
        if (cart.cartProducts.includes(element)) {
          const index = cart.cartProducts.findIndex((item) => item === element);

          if (cart.cartProducts[index].quantity > 1) {
            cart.cartProducts[index].quantity--;
          } else {
            cart.cartProducts.splice(index, 1);
          }
          setTotalPrice(
            (totalPrice) => totalPrice - cart.cartProducts[index].price
          );
          setCart({ ...cart, cartProducts: [...cart.cartProducts] });
        }
      }
    });
  };

  const addToCart = (event) => {
    cart.cartProducts.map((element) => {
      if (element.id === event.target.id) {
        if (!cart.cartProducts.includes(element)) {
          setCart({ ...cart, cartProducts: cart.cartProducts.push(element) });
          setCart({ ...cart, numberProducts: cart.numberProducts + 1 });
        } else {
          const index = cart.cartProducts.findIndex((item) => item === element);
          const product = cart.cartProducts[index];
          product.quantity++;
          setTotalPrice((totalPrice) => totalPrice + product.price);
          setCart({ ...cart, cartProducts: [...cart.cartProducts] });
        }
      }
    });
  };

  return (
    <>
      {cart.cartProducts.length > 0 &&
        cart.cartProducts.map((element) => (
          <article
            className="d-flex flex-row flex-wrap gap-3 justify-content-between align-items-center"
            key={element.id}
          >
            <div className="d-flex flex-row gap-3 align-items-center text-center">
              <img
                src={element.image}
                alt={element.description}
                width="60px"
                className="img-fluid"
              />
              <h3>{element.title}</h3>
            </div>
            <div>
              <h4 className="m-auto">{element.price}€</h4>
            </div>
            <div className="d-flex flex-row flex-wrap gap-3 align-items-center">
              <button
                id={element.id}
                onClick={addToCart}
                className="btn btn-success"
              >
                +
              </button>
              <h3>{element.quantity}</h3>
              <button
                id={element.id}
                onClick={deleteFromCart}
                className="btn btn-danger"
              >
                -
              </button>
            </div>
          </article>
        ))}
      <div className="mx-auto mt-5">
        <h2>{totalPrice}€</h2>
      </div>
    </>
  );
}
