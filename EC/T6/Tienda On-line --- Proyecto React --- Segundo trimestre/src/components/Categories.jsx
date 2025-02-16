import React, { useEffect } from 'react'
import { useState } from 'react'
import { getAPI } from '../utils/getAPI.jsx'

export default function Categories({ setProducts, allProducts }) {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        async function fetchData() {
            const response = await getAPI('https://fakestoreapi.com/products/categories')
            setCategories([...response])
        }

        fetchData()
    }, [])

    const handleOnClick = (event) => {
        console.log(event.target.value)
        if(event.target.value !== 'Todas las categorías') {
            setProducts([...filterByCategory(allProducts, event.target.value)])           
        } else {
            setProducts([...allProducts])
        }
    }

    const filterByCategory = (arr, value) => {
        return arr.filter((element) => element.category === value)
    }

  return (
    <>
        <nav className='mt-5 mb-5 d-flex flex-wrap flex-row gap-3 align-items-center justify-content-center'>
            <button onClick={handleOnClick} className='btn btn-primary' value="Todas las categorías">Todas las categorías</button>
            {categories.length > 0 && categories.map((element, index) => (
                <button onClick={handleOnClick} className='btn btn-secondary' value={element} key={index}>{element}</button>
            ))}
        </nav>
    </>
  )
}
