import { getAPI } from "../utils/getAPI.jsx";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await getAPI("https://fortnite-api.com/v2/shop");
      setProducts([...response.data.entries]);
    }

    fetchData();
  }, []);

  return (
    <>
      {console.log(products)}
      {products.length > 0 &&
        products.map((item, index) => (
          <Card key={index} style={{ width: "18rem" }}>
            <Card.Img variant="top" src="" />
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text>{item.regularPrice}</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        ))}
      <div>Product</div>
    </>
  );
}
