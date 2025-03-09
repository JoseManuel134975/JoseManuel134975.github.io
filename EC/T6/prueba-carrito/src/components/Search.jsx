import React, { useState } from 'react'

export default function Search({ allProducts, setProducts }) {
    const [textValue, setTextValue] = useState("")


    const filterByTextValue = (value) => {
        value = value.toLowerCase().trim()
        return allProducts.filter((element) => element.title.toLowerCase().includes(value))
    }

    const handleOnChange = (event) => {
        setTextValue(event.target.value)
    }

    const handleOnSubmit = (event) => {
        event.preventDefault()

        const newData = filterByTextValue(textValue)
        setProducts([...newData])
    }

  return (
    <>
        <form action="" onSubmit={handleOnSubmit}>
            <label htmlFor="search">search: </label>
            <input onChange={handleOnChange} type="text" id="search" />
            <input type="submit" value="search" />
        </form>
    </>
  )
}
