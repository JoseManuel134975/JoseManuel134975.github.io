import React, { useEffect, useState } from "react";
import GridProducts from "../components/GridProducts";
import Navbar from "../components/Navbar";
import { getAPI } from "../utils/getAPI";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await getAPI("https://fakestoreapi.com/products");
      setProducts([...response]);
      setAllProducts([...response]);
    }
    fetchData();
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <main>
        <GridProducts products={products} setProducts={setProducts} allProducts={allProducts} />
      </main>
    </>
  );
}
