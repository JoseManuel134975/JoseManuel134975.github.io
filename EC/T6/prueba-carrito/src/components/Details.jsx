import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { getAPI } from '../utils/getAPI.jsx'
import Product from './Product.jsx'

export default function Details() {
  const { id } = useParams()
  const [product, setProduct] = useState({})
  const navigate = useNavigate()


  useEffect(() => {
    async function fetchData() {
      const data = await getAPI(`https://fakestoreapi.com/products/${id}`)
      setProduct({...data})
    }
    fetchData()
  }, [])


  return (
    <>
      <button onClick={() => navigate('/Products')}>Volver</button>
      <Product cart={cart} setCart={setCart} product={product}></Product>
    </>
  )
}
