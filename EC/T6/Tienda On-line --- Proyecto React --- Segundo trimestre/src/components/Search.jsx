import React from 'react'
import { useNavigate } from 'react-router'

export default function Search() {
    const navigate = useNavigate()

    const handleOnChange = (event) => {
        navigate(`/Products?search=${event.target.value}`);
    }

  return (
    <>
        <form action="">
            <label htmlFor="search">Buscar</label>
            <input onChange={handleOnChange} type="search" name="" id="search" />
        </form>
    </>
  )
}
