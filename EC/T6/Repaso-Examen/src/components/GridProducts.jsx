import React, { useEffect, useState } from "react";
import CardProduct from "./CardProduct";
import Categories from "./Categories";
import { getAPI } from "../utils/getAPI";
import Search from "./Search";
import useQuery from '../hooks/useQuery'
import Pagination from "./Pagination";

export default function GridProducts({ products, setProducts, allProducts, setAllProducts }) {
  const [localCart, setLocalCart] = useState({
    cart: [],
    totalProducts: 0,
  });
  const [categories, setCategories] = useState([]);
  const query = useQuery()
  const search = query.get('search')
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1
  })

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(localCart));
  }, [localCart]);

  useEffect(() => {
    async function fetchData() {
      const categories = await getAPI(
        "https://fakestoreapi.com/products/categories"
      );
      setCategories([...categories]);
    }
    fetchData();
  }, []);
    
  useEffect(() => {
    async function fetchData() {
      const filterProducts = filterByTitle(products, search)
      setProducts([...filterProducts])
    }
    fetchData()
  }, [search])

  const filterByTitle = (arr, value) => {
    return arr.filter(element => element.title.toLowerCase().trim().includes(value.toLowerCase().trim()))
  }

  return (
    <>
      <Categories categories={categories} allProducts={allProducts} setProducts={setProducts} />
      <Search />
      <section className="row row-cols-2 mx-auto w-75">
        {products.length > 0 &&
          products.map((product) => (
            <CardProduct
              product={product}
              localCart={localCart}
              setLocalCart={setLocalCart}
              key={product.id}
            />
          ))}
      </section>
      <Pagination pagination={pagination} setPagination={setPagination} products={products} setProducts={setProducts} allProducts={allProducts} setAllProducts={setAllProducts} />
    </>
  );
}
