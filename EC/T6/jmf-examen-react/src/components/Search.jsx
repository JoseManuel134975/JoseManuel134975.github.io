import React, { useState } from 'react'
import { useNavigate } from 'react-router'

export default function Search() {
  const [textValue, setTextValue] = useState("")
  const navigate = useNavigate()

  const handleOnChange = (event) => {
    navigate(`/Home?search=${event.target.value}`)
    setTextValue(event.target.value)
  }

  const handleOnSubmit = () => {
    navigate(`/Home?search=${textValue}`)
  }

  return (
    <>
      <form action="" onSubmit={handleOnSubmit}>
        <label htmlFor="search">Buscador: </label>
        <input type="text" name="search" id="search" onChange={handleOnChange} />
        <input type="submit" value="Buscar" />
      </form>
    </>
  )
}
