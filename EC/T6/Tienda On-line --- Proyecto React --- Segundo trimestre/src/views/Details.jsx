import React from "react";
import Navbar from "../components/Navbar.jsx";
import { useParams } from "react-router";
import { useState } from "react";
import ItemProduct from "../components/ItemProduct.jsx";
import { useEffect } from "react";
import { getAPI } from "../utils/getAPI.jsx";

export default function Details() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    async function fecthData() {
      const response = await getAPI(`https://fakestoreapi.com/products/${id}`);
      setProduct({...response});
    }

    fecthData();
  }, []);

  return (
    <>
      <Navbar />
      <ItemProduct props={product}></ItemProduct>
    </>
  );
}
