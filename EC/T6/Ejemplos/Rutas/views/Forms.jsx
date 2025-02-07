import { useState } from "react";
import { useNavigate } from "react-router";

export default function Forms() {
  // Primera forma
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  // Segunda forma
  const [login, setLogin] = useState({
    nombre: "",
    contrasena: "",
  });

  return (
    <>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          loginUser(user, pass) && navigate("/");
        }}
      >
        <input
          type="text"
          name="user"
          id=""
          value={login.nombre}
          onChange={(e) => setLogin({ ...login, nombre: e.target.value })}
        />
        <input
          type="password"
          name="pass"
          id=""
          value={login.contrasena}
          onChange={(e) => setLogin({ ...login, contrasena: e.target.value })}
        />
        {console.log(login)}

        <input type="submit" value="Enviar" />
      </form>
    </>
  );
}

const validForm = (user, pass) => {
  if (user == pass && user != "") {
    return "El usuario no puede ser igual a la contraseña";
  }
};

const loginUser = (user, pass) => {
  if (user == "jander" && pass == "clander") return true;
  return false;
};
