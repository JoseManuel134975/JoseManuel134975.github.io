import React, { useEffect, useState } from "react";
import GridProducts from "../components/GridProducts";
import Search from "../components/Search";
import { API_ENDPOINT_PRODUCTS } from "../utils/urlsAPI";
import { getAPI } from "../utils/getAPI";
import Header from "../components/Header";
import Main from "../components/Main";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
  });

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAPI(API_ENDPOINT_PRODUCTS);
      const categories = data.map((product) => product.layout.category);
      const uniqueCategories = Array.from(new Set(categories));
      const allCategories = uniqueCategories.filter(
        (categorie) => categorie !== undefined
      );
      const products = data.slice(0, 50);
      setProducts([...products]);
      setAllProducts([...data]);
      setCategories([...allCategories]);
    };
    fetchData();
  }, []);

  useEffect(() => {
    let totalPages = Math.ceil(allProducts.length / 50);
    setPagination({ ...pagination, currentPage: 1, totalPages: totalPages });
  }, [products]);

  return (
    <>
      {console.log(pagination)}
      {console.log(products)}
      {console.log(allProducts)}
      {console.log(categories)}
      <Header
        Search={Search}
        categories={categories}
        allProducts={allProducts}
        setProducts={setProducts}
      />
      <Main GridProducts={GridProducts} products={products} />
    </>
  );
}
