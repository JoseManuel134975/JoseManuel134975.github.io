import React, { useEffect, useState } from "react";
import GridProducts from "../components/GridProducts";
import Search from "../components/Search";
import { API_ENDPOINT_PRODUCTS } from "../utils/urlsAPI";
import { getAPI } from "../utils/getAPI";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Pagination";
import LoadIcon from "../components/LoadIcon";
import { limit } from "../utils/limitProducts";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
  });
  const [cart, setCart] = useState({
    cartProducts: [],
    totalProducts: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAPI(API_ENDPOINT_PRODUCTS);
      const categories = data.map((product) => product.layout.category);
      const uniqueCategories = Array.from(new Set(categories));
      const allCategories = uniqueCategories.filter(
        (categorie) => categorie !== undefined
      );
      const startIndex = (pagination.currentPage - 1) * limit;
      const endIndex = startIndex + limit;
      const products = data.slice(startIndex, endIndex);
      setProducts([...products]);
      setAllProducts([...data]);
      setCategories([...allCategories]);
    };
    fetchData();
  }, []);

  useEffect(() => {
    let totalPages = Math.ceil(allProducts.length / limit);
    setPagination({ ...pagination, currentPage: pagination.currentPage, totalPages: totalPages });
  }, [products]);

  return (
    <>
      <Header
        Search={Search}
        categories={categories}
        allProducts={allProducts}
        setProducts={setProducts}
        cart={cart}
      />
      <Main
        GridProducts={GridProducts}
        products={products}
        cart={cart}
        setCart={setCart}
        LoadIcon={LoadIcon}
      />
      <Footer
        setProducts={setProducts}
        pagination={pagination}
        setPagination={setPagination}
      />
    </>
  );
}
