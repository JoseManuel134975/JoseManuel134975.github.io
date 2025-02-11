import { useState } from "react";
import { useNavigate } from "react-router";
import users from "../data/db.json";

export default function Login() {
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    name: "",
    pass: "",
  });

  const loginUser = (login) => {
    const find = users.users.find(
      (u) => u.name === login.name && u.password === login.pass
    );
    if (find !== undefined) return true;
    alert("No existe ese usuario.");
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(login) && navigate("/Home");
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="user"
          id=""
          value={login.name}
          onChange={(e) => setLogin({ ...login, name: e.target.value })}
        />
        <input
          type="password"
          name="pass"
          id=""
          value={login.pass}
          onChange={(e) => setLogin({ ...login, pass: e.target.value })}
        />

        <input type="submit" value="Enviar" />
      </form>
    </>
  );
}

