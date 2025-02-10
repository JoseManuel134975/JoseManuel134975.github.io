import { getAPI } from "../utils/getAPI.jsx";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import useQuery from "../hooks/useQuery.jsx";

export default function Product() {
  const [products, setProducts] = useState([]);
  const query = useQuery()
  const search = query.get('search')
  console.log(search);

  useEffect(() => {
    async function fetchData() {
      let response = [];
      if(!search){
        response = await getAPI("https://fakestoreapi.com/products")
      } else {
        response = await getAPI("https://fakestoreapi.com/products/category/" + search)
      }
      setProducts([...response]);
    }

    fetchData();
  }, [search]);

  return (
    <>
      {console.log(products)}
      {products.length > 0 &&
        products.map(
          (item, index) => (
            console.log(item),
            (
              <Card key={index} style={{ width: "18rem" }}>
                <Card.Img variant="top" src="" />
                <Card.Body>
                  <Card.Title>Id: {item.id}</Card.Title>
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
