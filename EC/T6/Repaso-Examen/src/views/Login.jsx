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
          element.name === login.name && element.password === login.pass
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
        name: login.name,
        password: login.pass,
        gmail: "",
        id: users.length + 1,
      };
      const post = await postAPI('http://localhost:3000/users', newUser)
      alert(`Usuario ${post.name} registrado con éxito.`)
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
      const json = await getAPI("http://localhost:3000/users");
      setUsers([...json]);
    }
    fetchData();
  }, []);

  return (
    <>
      <form action="">
        <label htmlFor="name">Name: </label>
        <input onChange={handleOnChangeName} type="text" name="" id="" />
        <br />
        <label htmlFor="pass">Pass: </label>
        <input onChange={handleOnChangePass} type="password" name="" id="" />
        <br />
        <input
          onClick={handleOnClickLogin}
          type="submit"
          value="Login"
          name="login"
        />
        <input
          onClick={handleOnClickRegister}
          type="submit"
          value="Register"
          name="register"
        />
      </form>
    </>
  );
}
