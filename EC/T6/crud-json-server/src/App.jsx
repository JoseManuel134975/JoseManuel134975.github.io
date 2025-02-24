import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { postAPI } from "./utils/postAPI";

export default function App() {
  const [users, setUsers] = useState([]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data, event) => {
    console.log(event.target)
    if (event.target === "register") {
      // data = {...data,
      //   id: users.length + 1
      // }
      const post = await postAPI("http://localhost:3000/posts", data);
      setUsers([...users, post]);
    } else {
      console.log("hola")
    }
  };

  console.log(watch("example")); // watch input value by passing the name of it

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/posts");
      const data = await response.json();
      setUsers([...data]);
    };
    fetchData();
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue="test" {...register("username")} />

        <input {...register("password", { required: true })} />
        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit" value="Register" name="register" />
        <input type="submit" value="Login" name="login" />
      </form>

      {users.length > 0 && users.map((user, index) => (
        <ul key={index}>
          <li>{user.username}</li>
        </ul>
      ))}
    </>
  );
}
