import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router";

export default function Product({ element, cart, setCart }) {
  const addToCart = () => {
    if(!cart.cartProducts.includes(element)) {
      setCart({...cart, 
        cartProducts: [...cart.cartProducts, element],
        totalProducts: cart.totalProducts + 1
      })
    } else {
      const index = cart.cartProducts.findIndex(product => product === element)
      cart.cartProducts[index].quantity++
      setCart({...cart, 
        cartProducts: [...cart.cartProducts],
        totalProducts: cart.totalProducts
      })
    }
  }

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  return (
    <>
      <Card className="col col-lg-3" style={{ width: "18rem" }}>
        <Link to={`/Details/${element.id}`}>
          <Card.Img
            variant="top"
            src={
              (element.bundle && element.bundle.image) ||
              (element.brItems &&
                element.brItems[0].images &&
                (element.brItems[0].images.featured ||
                  element.brItems[0].images.icon)) ||
              (element.tracks && element.tracks[0].albumArt) ||
              (element.instruments &&
                element.instruments[0].images &&
                element.instruments[0].images.large)
            }
          />        
        </Link>
        <Card.Body>
          <Card.Title>
            {(element.bundle && element.bundle.name) ||
              (element.brItems && element.brItems[0].name) ||
              (element.tracks && element.tracks[0].title) ||
              (element.instruments && element.instruments[0].name)}
          </Card.Title>
          <Card.Text>{element.regularPrice} V-Bucks</Card.Text>
          <Button onClick={addToCart} variant="primary">Add to cart</Button>
        </Card.Body>
      </Card>
    </>
  );
}
