import React, { useEffect, useState } from 'react'
import { getAPI } from '../utils/getAPI'
import Product from '../components/Product'
import Search from '../components/Search'

export default function Products() {
  const API_PRODUCTS_URL = 'https://fakestoreapi.com/products'
  const [products, setProducts] = useState([])
  const [allProducts, setAllProducts] = useState([])
  const [cart, setCart] = useState([])



  useEffect(() => {
    async function fetchData() {
      const data = await getAPI(API_PRODUCTS_URL)
      setProducts([...data])
      setAllProducts([...data])
    }
    fetchData()
  }, [])

  return (
    <>
      <Search allProducts={allProducts} setProducts={setProducts} ></Search>
      <section>
        {products.length > 0 && products.map((product) => (
          <Product cart={cart} setCart={setCart} product={product} key={product.id}></Product>
        ))}
      </section>
    </>
  )
}
