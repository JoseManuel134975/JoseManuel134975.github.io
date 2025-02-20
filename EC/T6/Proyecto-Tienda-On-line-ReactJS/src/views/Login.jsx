import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router";
import { getAPI } from "../utils/getAPI";
import { API_ENDPOINT_USERS } from "../utils/urlsAPI";

function Login() {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  const handleOnChangeName = (event) => {
    setLogin({ ...login, username: event.target.value });
  };

  const handleOnChangePass = (event) => {
    setLogin({ ...login, password: event.target.value });
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    if(users.find(user => user.username === login.username && user.password === login.password) !== undefined) {
      navigate('/Products')
    } else {
        alert('No existe ese usuario.')
    }
  };



  useEffect(() => {
    const fetchData = async () => {
      const data = await getAPI(API_ENDPOINT_USERS);
      setUsers([...data]);
    };
    fetchData()
  }, []);

  return (
    <>
      <Form onSubmit={handleOnSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control
            onChange={handleOnChangeName}
            type="text"
            placeholder="Enter username"
          />
          <Form.Text className="text-muted">
            We'll never share your credentials with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={handleOnChangePass}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </>
  );
}

export default Login;
