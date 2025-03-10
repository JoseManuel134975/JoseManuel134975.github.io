import React, { useEffect, useState } from "react";
import { getAPI } from "../utils/getAPI";
import { useNavigate } from "react-router";

export default function Login() {
  const [users, setUsers] = useState([]);
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleOnChange = (event) => {
    if (event.target.id === "username") {
      setLogin({ ...login, username: event.target.value });
    } else {
      setLogin({ ...login, password: event.target.value });
    }
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();

    const find = users.find(
      (user) =>
        user.username === login.username && user.email === login.password
    );

    if (find !== undefined) {
      navigate("/Principalpage");
      localStorage.setItem("user", JSON.stringify(find))
    }
  };

  useEffect(() => {
    async function fetchData() {
      const data = await getAPI("https://jsonplaceholder.typicode.com/users");
      setUsers([...data]);
    }
    fetchData();
  }, []);

  return (
    <>
      <h1>BIENVENIDO</h1>
      <form action="" onSubmit={handleOnSubmit}>
        <input
          type="text"
          id="username"
          placeholder="Usuario"
          onChange={handleOnChange}
        />
        <input
          type="text"
          id="password"
          placeholder="Contraseña"
          onChange={handleOnChange}
        />
        <input type="submit" value="Login" />
      </form>
    </>
  );
}
