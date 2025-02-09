import { useState } from "react";
import { useNavigate } from "react-router";
import users from "../data/db.json";

export default function Login() {
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    name: "",
    pass: "",
  });

  return (
    <>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          loginUser(login) && navigate("/Home");
        }}
      >
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

// const validForm = (user, pass) => {
//   if (user == pass && user != "") {
//     return "El usuario no puede ser igual a la contraseña";
//   }
// };

const loginUser = (login) => {
  const find = users.users.find(
    (u) => u.name === login.name && u.password === login.pass
  );
  if (find !== undefined) return true;
  alert("No existe ese usuario.");
};
