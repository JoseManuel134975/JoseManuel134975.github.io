import React from 'react'
import users from '../data/users.json'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import { Link } from 'react-router'

export default function Login() {
  const [login, setLogin] = useState({
    name: "",
    pass: ""
  })
  const navigate = useNavigate()

  const handleOnSubmit = (event) => {
    event.preventDefault()
    if(users.find(element => element.name === login.name && element.password === login.pass) !== undefined) {
      navigate('/Products')
    } else {
      alert('No existe ese usuario.')
    }
  }

  const handleOnChangeName = (event) => {
    event.preventDefault()
    setLogin({...login, name: event.target.value})
  }

  const handleOnChangePass = (event) => {
    event.preventDefault()
    setLogin({...login, pass: event.target.value})
  }

  return (
    <>
      <form action="" onSubmit={handleOnSubmit}>
        <div>
          <label htmlFor="name">Nombre</label>
          <input type="text" name="" id="name" onChange={handleOnChangeName}/>
        </div>
        <div>
          <label htmlFor="password">Contraseña</label>
          <input type="password" name="" id="password" onChange={handleOnChangePass}/>
        </div>
        <input type="submit" value="Entrar" />
        <Link to='/Register'>
          Registrarse
        </Link>
      </form>
    </>
  )
}