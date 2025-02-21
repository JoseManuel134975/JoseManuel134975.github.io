import React, { useEffect, useState } from 'react'
import { getAPI } from '../utils/getAPI'
import Product from './Product'
import useQuery from '../hooks/useQuery'
import Search from './Search'

export default function Products() {
  const [products, setProducts] = useState([])
  const query = useQuery()
  const search = query.get('search')
  const [inCart, setInCart] = useState(false)

  const filterByTitle = (arr, value) => {
    return arr.filter(product => product.title.toLowerCase().trim().includes(value))
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAPI('http://localhost:3000/results')  
      setProducts([...data])
    }
    fetchData()
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      const filterProducts = filterByTitle(products, search)
      setProducts([...filterProducts])
    }
    fetchData()
  }, [search])

  return (
    <>
      <section>
        <Search />
        {products.length > 0 && products.map(product => (
            <Product key={product.id} product={product} products={products} inCart={false} setInCart={setInCart} />
        ))}
      </section>
    </>
  )
}
