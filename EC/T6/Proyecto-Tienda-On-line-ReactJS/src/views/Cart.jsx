import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import { getAPI } from "../utils/getAPI";
import { API_ENDPOINT_PRODUCTS } from "../utils/urlsAPI";
import FlexCart from "../components/FlexCart";

export default function Cart() {
  const localCart = JSON.parse(localStorage.getItem('cart'))
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [categories, setCategories] = useState([]);
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
      const products = data.slice(0, 50);
      setProducts([...products]);
      setAllProducts([...data]);
      setCategories([...allCategories]);
    };
    fetchData();
  }, []);

  useEffect(() => {
    setCart({...cart, 
      cartProducts: [...localCart.cartProducts],
      totalProducts: localCart.totalProducts
    })
  }, [])

  return (
    <>
      <Header
        Search={Search}
        categories={categories}
        allProducts={allProducts}
        setProducts={setProducts}
        cart={cart}
      />
      <FlexCart cart={cart} setCart={setCart} />
    </>
  );
}
