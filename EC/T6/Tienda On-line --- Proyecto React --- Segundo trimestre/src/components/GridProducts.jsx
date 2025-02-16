import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getAPI } from "../utils/getAPI.jsx";
import { Link } from "react-router";
import Categories from '../components/Categories.jsx'
import Search from "./Search.jsx";
import useQuery from '../hooks/useQuery.jsx'
import { useDebounce } from '../hooks/useDebounce.jsx'
import BasicExample from "./Spinner.jsx";

export default function GridProducts() {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const query = useQuery()
  const search = query.get("search");
  const debounceSearch = useDebounce(search, 2000)
  const [isLoading, setIsLoading] = useState(false)


  useEffect(() => {
    async function fetchData() {
      setIsLoading(true)
      const response = await getAPI("https://fakestoreapi.com/products");
      setProducts([...response]);
      setAllProducts([...response]);
    }
    fetchData();
    setIsLoading(false)
  }, []);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true)
      const response = await getAPI("https://fakestoreapi.com/products");
      const filter = filterByInput(response, search)
      setProducts([...filter])
    }
    fetchData();
    setIsLoading(false)
  }, [debounceSearch]);

  const filterByInput = (arr, value) => {
    value = value.toLowerCase().replace(/\s+/g, "");
    return arr.filter((element) => element.title.toLowerCase().replace(/\s+/g, "").includes(value))
  };

  return (
    <>
      <Categories setProducts={setProducts} allProducts={allProducts}/>
      <Search />
      {console.log(products)}
      <section className="row row-cols-lg-4 row-cols-sm-2 row-cols-md-2 gy-5 gx-5 m-auto">
        {products.length > 0 && !isLoading ?
          products.map((element) => (
            <article
              key={element.id}
              className="col-lg-3 col-md-6 col-sm-12 d-flex flex-column flex-wrap align-items-center justify-content-center gap-3"
            >
              <Link to={`/Details/${element.id}`}>
                <img
                  src={element.image}
                  alt={"Artista: " + element.description}
                  className="img-fluid m-auto"
                />
              </Link>
              <h3 className="m-auto">{element.title}</h3>
              {element.description ? (
                <p className="m-auto">{element.description}</p>
              ) : (
                <i className="m-auto">
                  La descripción no se encuentra disponible...
                </i>
              )}
              <b className="m-auto">{element.price + " €"}</b>
            </article>
          )): <BasicExample />}
      </section>
    </>
  );
}
