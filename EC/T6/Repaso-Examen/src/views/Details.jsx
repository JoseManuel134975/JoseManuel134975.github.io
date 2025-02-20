import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getAPI } from "../utils/getAPI";
import DetailsProduct from "../components/DetailsProduct";

export default function Details() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    async function fetchData() {
      const product = await getAPI(`https://fakestoreapi.com/products/${id}`);
      setProduct(product);
    }
    fetchData();
  }, []);

  return (
    <>
      {console.log(product)}
      <DetailsProduct product={product} />
    </>
  );
}
