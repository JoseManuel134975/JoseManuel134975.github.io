import { getAPI } from "../utils/getAPI.jsx";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import useQuery from "../hooks/useQuery.jsx";
import { useDebounce } from "../hooks/useDebounce.jsx";
import { Link } from "react-router";
import SpinnerLoad from "./SpinnerLoad.jsx";

export default function Product() {
  const [products, setProducts] = useState([]);
  const query = useQuery();
  const search = query.get("search");
  const searchDebounce = useDebounce(search, 1000);

  const filterByCategory = (arr, value) => {
    value = value.toLowerCase().replace(/\s+/g, "");
    const filter = arr.filter((item) =>
      item.category.toLowerCase().replace(/\s+/g, "").includes(value)
    );
    return filter;
  };

  useEffect(() => {
    async function fetchData() {
      const response = await getAPI("https://fakestoreapi.com/products");

      if (search) {
        const filter = filterByCategory(response, searchDebounce);
        setProducts([...filter]);
      } else {
        setProducts([...response]);
      }
    }

    fetchData();
  }, [searchDebounce]);

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
                <Button variant="primary">Añadir al carrito</Button>
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
