import React, { useState } from 'react'

export default function Buscador({ allPosts, setPosts }) {
  const [search, setSearch] = useState("")

  const handleOnSubmit = (event) => {
    event.preventDefault()

    const newData = filterByBody(allPosts, search)
    setPosts([...newData])
  }

  const handleOnChange = (event) => {
    setSearch(event.target.value)
  }

  const filterByBody = (arr, value) => {
    value = value.toLowerCase().trim()
    return arr.filter((post) => post.body.includes(value))
  }

  return (
    <>
      <form action="" onSubmit={handleOnSubmit}>
        <label htmlFor="search">Buscador: </label>
        <input type="text" id='search' onChange={handleOnChange} />
        <input type="submit" value="Buscar" />
      </form>
    </>
  )
}
