import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function Search() {
  const [textValue, setTextValue] = useState("");
  const navigate = useNavigate();

  const handleOnChange = (event) => {
    navigate(`/Products?search=${event.target.value}`);
    setTextValue(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault()
    navigate(`/Products?search=${textValue}`);
  };

  return (
    <>
      <form action="" onSubmit={handleOnSubmit}>
        <label htmlFor="search">Buscar</label>
        <input onChange={handleOnChange} type="search" name="" id="search" />
        <input type="submit" value="Buscar" />
      </form>
    </>
  );
}
