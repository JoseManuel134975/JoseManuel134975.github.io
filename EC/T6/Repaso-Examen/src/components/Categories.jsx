import React, { useEffect, useState } from 'react'

export default function Categories({ categories, allProducts, setProducts }) {
  const [category, setCategory] = useState("")

  const handleOnClick = (event) => {
    setCategory(event.target.id)
  }

  const filterByCategory = (arr, category) => {
    return arr.filter(element => element.category === category)
  }

  useEffect(() => {
    async function fetchData() {
      const filterProducts = filterByCategory(allProducts, category)
      setProducts([...filterProducts])
    }
    fetchData()
  }, [category])

  return (
    <>
      <nav className='d-flex flex-row align-items-center mx-auto justify-content-center'>
        {categories.length > 0 && categories.map((category, index) => (
          <button onClick={handleOnClick} id={category} key={index} className='btn btn-info'>{category}</button>
        ))}
      </nav>
    </>
  )
}
