import React, { useState } from 'react'
import { useNavigate } from 'react-router'

export default function Search() {
  const [textValue, setTextValue] = useState("")
  const navigate = useNavigate()

  const handleOnChange = (event) => {
    setTextValue(event.target.value)
    navigate(`/Products?search=${event.target.value}`)
  }

  const handleOnSubmit = (event) => {
    event.preventDefault()
    navigate(`/Products?search=${textValue}`)
  }

  return (
    <>
      <form action="" onSubmit={handleOnSubmit}>
        <input type="text" onChange={handleOnChange} />
      </form>
    </>
  )
}
