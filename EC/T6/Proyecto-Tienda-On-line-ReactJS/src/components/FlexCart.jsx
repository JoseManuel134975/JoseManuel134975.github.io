import React, { useEffect, useState } from "react";

export default function FlexCart({ cart, setCart }) {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const prices = cart.cartProducts.map(
      (element) => element.regularPrice * element.quantity
    );
    const sumWithInitial = prices.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    setTotalPrice(sumWithInitial);
  }, [cart]);

  const addToCart = (event) => {
    cart.cartProducts.map((element) => {
      if (element.id === event.target.id) {
        const index = cart.cartProducts.findIndex(
          (product) => product === element
        );
        cart.cartProducts[index].quantity++;
        setCart({
          ...cart,
          cartProducts: [...cart.cartProducts],
          totalProducts: cart.totalProducts,
        });
      }
    });
  };

  const deleteFromCart = (event) => {
    cart.cartProducts.map((element) => {
      if (element.id === event.target.id) {
        const index = cart.cartProducts.findIndex(
          (product) => product === element
        );
        if (cart.cartProducts[index].quantity > 1) {
          cart.cartProducts[index].quantity--;
          setCart({
            ...cart,
            cartProducts: [...cart.cartProducts],
            totalProducts: cart.totalProducts,
          });
        } else {
          cart.cartProducts.splice(index, 1);
          setCart({
            ...cart,
            cartProducts: [...cart.cartProducts],
            totalProducts: cart.totalProducts - 1,
          });
        }
      }
    });
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <>
      <section className="mt-5 d-flex flex-column justify-content-center align-items-center gap-5">
        {cart.cartProducts.length > 0 &&
          cart.cartProducts.map((product) => (
            <article
              className="d-flex flex-row justify-content-between align-items-center gap-3 w-100"
              key={product.id}
            >
              <div className="d-flex justify-content-center align-items-center gap-3">
                <img
                  className="img-fluid bg-lightgray rounded-5 p-3"
                  width="200px"
                  src={
                    (product.bundle && product.bundle.image) ||
                    (product.newDisplayAsset &&
                      product.newDisplayAsset.renderImages[0].image) ||
                    (product.brItems &&
                      product.brItems[0].images &&
                      (product.brItems[0].images.featured ||
                        product.brItems[0].images.icon)) ||
                    (product.tracks && product.tracks[0].albumArt) ||
                    (product.instruments &&
                      product.instruments[0].images &&
                      product.instruments[0].images.large)
                  }
                  alt={
                    (product.brItems && product.brItems[0].description) || 
                    (product.instruments && product.instruments[0].description)
                  }
                />
                <h3>
                  {(product.bundle && product.bundle.name) ||
                    (product.brItems && product.brItems[0].name) ||
                    (product.tracks && product.tracks[0].title) ||
                    (product.instruments && product.instruments[0].name)}
                </h3>
              </div>
              <div>
                <i className="fs-5">{product.regularPrice} V-Bucks</i>
              </div>
              <div className="d-flex gap-3 align-items-center">
                <button
                  onClick={addToCart}
                  id={product.id}
                  className="btn btn-success"
                >
                  +
                </button>
                <b className="fs-5">{product.quantity}</b>
                <button
                  onClick={deleteFromCart}
                  id={product.id}
                  className="btn btn-danger"
                >
                  -
                </button>
              </div>
            </article>
          ))}
        <div className="d-flex flex-row gap-3 align-items-center justify-content-center">
          {cart.cartProducts.length > 0 ? (
            <h2>{totalPrice} V-Bucks</h2>
          ) : (
            <h3>¡Empieza a añadir productos a tu carrito!</h3>
          )}
          <button className="btn btn-success">Finalizar compra</button>
        </div>
      </section>
    </>
  );
}
