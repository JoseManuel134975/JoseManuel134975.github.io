import { getAPI } from "../utils/getAPI.jsx";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router";
import SpinnerLoad from "./SpinnerLoad.jsx";
import cartProducts from "../data/cart.json"

export default function ProductsCart() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
        const response = cartProducts;
        setProducts([...response]);
      }

    fetchData();
  }, []);

  return (
    <>
      {products.length > 0 ? (
        products.map((item) => (
          <Link key={item.id} to={`/Details/${item.id}`}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
                <Card.Title>Id: {item.id}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <Card.Subtitle>Precio: {item.price}</Card.Subtitle>
                <Card.Subtitle>Cantidad {item.quantity}</Card.Subtitle>
                <Button variant="primary">Añadir al carrito</Button>
                <Button variant="primary">Eliminar del carrito</Button>
              </Card.Body>
            </Card>
          </Link>
        ))
      ) : (
        <SpinnerLoad></SpinnerLoad>
      )}
    </>
  );
}
