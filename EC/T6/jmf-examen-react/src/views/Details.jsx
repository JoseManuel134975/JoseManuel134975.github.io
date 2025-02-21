import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { useEffect } from 'react'
import { getAPI } from '../utils/getAPI'

export default function Details() {
  const { id } = useParams()
  const [product, setProduct] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAPI(`http://localhost:3000/results/${id}`)
      setProduct(data)
    }
    fetchData()
  }, [])

  return (
    <>
      <button onClick={() => navigate('/Home')}>Volver</button>
      <article>
        <img src={product.image} alt={product.description} width='300px' />
        <h2>{product.title}</h2>
        <b>price: {product.price}</b>
        <p>{product.description}</p>
        <h3>category: {product.category}</h3>
      </article>
    </>
  )
}
