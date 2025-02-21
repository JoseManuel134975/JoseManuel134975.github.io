import React, { useEffect, useState } from 'react'
import { getAPI } from '../utils/getAPI'
import { useNavigate } from 'react-router'

export default function Login() {
  const navigate = useNavigate()
  const [users, setUsers] = useState([]) 
  const [login, setLogin] = useState({
    username: "",
    password: ""
  })

  const handleOnChangeName = (event) => {
    setLogin({...login, username: event.target.value})
  }

  const handleOnChangePass = (event) => {
    setLogin({...login, password: event.target.value})
  }

  const handleOnSubmit = () => {
    if(users.find(user => user.username === login.username && user.password === login.password) !== undefined) {
      navigate('/Home')
    } else {
        alert('El usuario no existe.')
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAPI('https://fakestoreapi.com/users')  
      setUsers([...data])
    }
    fetchData()
  }, [])

  return (
    <>
      <form action="" onSubmit={handleOnSubmit}>
        <label htmlFor="username">Nombre de usuario: </label>
        <input type="text" name="username" id="username" onChange={handleOnChangeName} />
        <br />
        <label htmlFor="password">Contraseña: </label>
        <input type="password" name="password" id="password" onChange={handleOnChangePass}/>
        <input type="submit" value="Entrar" />
      </form>
    </>
  )
}
