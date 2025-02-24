import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from 'axios'

export default function App() {
  const [users, setUsers] = useState([]);
  const [newPost, setNewPost] = useState({ username: '', email: '' });
  const [editPost, setEditPost] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/posts')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => console.log(error));
  }, []);

  const handleOnEdit = (event) => {
    axios.put(`http://localhost:3000/posts/${editPost.id}`, editPost)
    .then(response => {
      setUsers(users.map(user => user.id === editPost.id ? response.data : user));
      setEditPost(null);
    })
    .catch(error => console.log(error));
  }

  const handleOnDelete = (id) => {
    axios.delete(`http://localhost:3000/posts/${id}`)
      .then(() => {
        setUsers(users.filter(user => user.id !== id));
      })
      .catch(error => console.log(error));
  }

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, event) => {
    axios.post('http://localhost:3000/posts', data)
      .then(response => {
        setUsers([...users, response.data]);
        setNewPost({ username: '', email: '' });
      })
      .catch(error => console.log(error));
  };

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <>
      {/**
       * Create
       */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input {...register("username")} />

        {/* include validation with required or other standard HTML validation rules */}
        <input {...register("email", { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit" value="Create" />
      </form>

      {/**
       * Read
       */}
      {users.length > 0 &&
        users.map((user) => (
          <ul key={user.id}>
            <li>Nombre: {user.username}</li>
            <li>Email: {user.email}</li>
            <button onClick={() => handleOnEdit(user)}>Edit</button>
            <button onClick={() => handleOnDelete(user.id)}>Delete</button>
          </ul>
        ))}
    </>
  );
}
