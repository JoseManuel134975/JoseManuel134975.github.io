import React, { useState, useEffect } from "react";
import { getAPI } from "../utils/getAPI";
import { postAPI } from "../utils/postAPI";
import { useNavigate } from "react-router";

export default function Login() {
  const [login, setLogin] = useState({
    name: "",
    pass: "",
  });
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  /**
   * Comprueba si el usuario existe, si es true navega a otra página, sino salta un alert
   * @param {Event} event 
   */
  const handleOnClickLogin = (event) => {
    event.preventDefault()
    if (
      users.find(
        (element) =>
          element.username === login.name && element.password === login.pass
      ) !== undefined
    ) {
      navigate("/Products");
    } else {
      alert("No existe ese usuario");
    }
  };

  /**
   * Comprueba si el usuario existe, si es true salta un alert, sino realiza una
   * petición POST a la API con JSON-Server
   * @param {Event} event 
   */
  const handleOnClickRegister = async (event) => {
    event.preventDefault()
    if (
      users.find(
        (element) =>
          element.name === login.name && element.password === login.pass
      ) !== undefined
    ) {
      alert("Ese usuario ya existe, realiza un login.");
    } else {
      const newUser = {
        username: login.name,
        password: login.pass,
        email: "",
        id: users.length + 1,
      };
      const post = await postAPI('https://fakestoreapi.com/users', newUser)
      alert(`Usuario ${post.username} registrado con éxito.`)
    }
  };

  const handleOnChangeName = (event) => {
    setLogin({ ...login, name: event.target.value });
  };

  const handleOnChangePass = (event) => {
    setLogin({ ...login, pass: event.target.value });
  };

  useEffect(() => {
    async function fetchData() {
      const json = await getAPI("https://fakestoreapi.com/users");
      setUsers([...json]);
    }
    fetchData();
  }, []);

  return (
    <>
      <form action="">
        <label htmlFor="name">Username: </label>
        <input onChange={handleOnChangeName} type="text" />
        <br />
        <label htmlFor="pass">Password: </label>
        <input onChange={handleOnChangePass} type="password" />
        <br />
        <input
          onClick={handleOnClickLogin}
          type="submit"
          value="Login"
        />
        <input
          onClick={handleOnClickRegister}
          type="submit"
          value="Register"
        />
      </form>
    </>
  );
}
