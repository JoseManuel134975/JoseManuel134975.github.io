import { getAPI } from "../utils/getAPI.jsx";
import { useEffect, useState } from "react";
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
        products.map(
          (item, index) => (
            console.log(item),
            (
              <Card key={index} style={{ width: "18rem" }}>
                {item.newDisplayAsset && 
                <Card.Img variant="top" src={item.newDisplayAsset.renderImages[0]} />}
                <Card.Body>
                  <Card.Title>{item.layout.name}</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            )
          )
        )}
      <div>Product</div>
    </>
  );
}
