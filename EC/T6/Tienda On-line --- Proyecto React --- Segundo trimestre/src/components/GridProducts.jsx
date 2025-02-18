import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getAPI } from "../utils/getAPI.jsx";
import { Link } from "react-router";
import Categories from "../components/Categories.jsx";
import Search from "./Search.jsx";
import useQuery from "../hooks/useQuery.jsx";
import { useDebounce } from "../hooks/useDebounce.jsx";
import BasicExample from "./Spinner.jsx";
import AdvancedExample from "./Pagination.jsx";
// import json from "../data/products.json";

export default function GridProducts() {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [page, setPage] = useState(1)
  const [cart, setCart] = useState({
    numberProducts: 0,
    cartProducts: []
  })
  const query = useQuery();
  const search = query.get("search");
  const debounceSearch = useDebounce(search, 2000);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const response = await getAPI(`http://localhost:3000/products?_page=${page}&per_page=10`);
      setProducts(response.data);
      setAllProducts(response.data);
    }
    fetchData();
    setIsLoading(false);
  }, []);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const response = await getAPI(`http://localhost:3000/products?_page=${page}&per_page=10`);
      setProducts(response.data);
      setAllProducts(response.data);
    }
    fetchData();
    setIsLoading(false);
  }, []);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const response = await getAPI(`http://localhost:3000/products?_page=${page}&per_page=10`);
      const filter = filterByInput(response.data, search);
      setProducts(filter);
    }
    fetchData();
    setIsLoading(false);
  }, [debounceSearch]);

  useEffect(() => {
    async function fetchData() {
      localStorage.setItem("cart", JSON.stringify(cart))
    }
    fetchData();
  }, [cart]);

  const filterByInput = (arr, value) => {
    if (value !== "") {
      value = value.toLowerCase().replace(/\s+/g, "");
    } else {
      value = value.replace(/\s+/g, "");
    }
    return arr.filter((element) =>
      element.title.toLowerCase().replace(/\s+/g, "").includes(value)
    );
  };

  const addToCart = (event) => {
    products.map((element) => {
      if (element.id === parseInt(event.target.id)) {
        if(!cart.cartProducts.includes(element)) { 
          setCart({...cart, cartProducts: cart.cartProducts.push(element)})
          setCart({...cart, numberProducts: cart.numberProducts + 1})
        } else {
          const index = cart.cartProducts.findIndex(item => item === element)
          cart.cartProducts[index].quantity++
          setCart({...cart, cartProducts: [...cart.cartProducts]})
        }
      }
    });
  };

  const deleteFromCart = (event) => {
    const newProducts = products
      .map((element) => {
        if (element.id === parseInt(event.target.id)) {
          if (element.quantity <= 1) {
            return null;
          }

          return { ...element, quantity: element.quantity - 1 };
        }
        return element;
      })
      .filter((element) => element !== null);

    setProducts(newProducts);
  };

  return (
    <>
    {console.log(allProducts)}
      <Categories setProducts={setProducts} allProducts={allProducts} />
      <Search />
      <Link to="/Cart" className="mt-5">
        <i className="bi bi-cart fs-1 text-black position-relative">
          <div className="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-danger text-white fs-6">
            {cart.numberProducts}
          </div>
        </i>
      </Link>
      <section className="row row-cols-lg-4 row-cols-sm-2 row-cols-md-2 gy-5 gx-5 m-auto">
        {products.length > 0 && !isLoading ? (
          products.map((element) => (
            <article
              key={element.id}
              className="col-lg-3 col-md-6 col-sm-12 d-flex flex-column flex-wrap align-elements-center justify-content-center gap-3"
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
              <div className="d-flex flex-row flex-wrap gap-3 align-items-center justify-content-center">
                <button
                  id={element.id}
                  onClick={addToCart}
                  className="btn btn-primary"
                >
                  Añadir al carrito
                </button>
              </div>
            </article>
          ))
        ) : (
          <BasicExample />
        )}
      </section>
      <AdvancedExample products={products} setProducts={setProducts} page={page} setPage={setPage} setAllProducts={setAllProducts} />
    </>
  );
}
