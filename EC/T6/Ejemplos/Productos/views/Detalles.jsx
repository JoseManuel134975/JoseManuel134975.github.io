import { useParams } from "react-router";
import Navbar from "../components/Navbar.jsx";
import ProductDetails from "../components/ProductDetails.jsx";
import { useState, useEffect } from "react"
import { getAPI } from "../utils/httpClient.js";

export default function Detalles() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    async function fetchData() {
      const response = await getAPI(`https://fakestoreapi.com/products/${ id }`); // El param tiene que llamarse igual a la propiedad del JSON
      setProduct(response);
    }

    fetchData();
  }, [ ]);

  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <ProductDetails obj={ product }></ProductDetails>
    </>
  );
}
