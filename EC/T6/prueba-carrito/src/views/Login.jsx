import React from 'react'
import { getAPI } from '../utils/getAPI.jsx'
import { useNavigate } from 'react-router'
import { useState, useEffect } from 'react'

export default function Login() {
    const API_USERS_URL = 'https://fakestoreapi.com/users'
    const [login, setLogin] = useState({
        username: "",
        password: ""
    })
    const [users, setUsers] = useState([])
    const navigate = useNavigate()

    const handleOnChange = (event) => {
        if(event.target.id === "username") {
            setLogin({...login, 
                username: event.target.value
            })
        } else {
            setLogin({...login, 
                password: event.target.value
            })
        }
    }

    const handleOnSubmit = (event) => {
        event.preventDefault()

        if(users.find(user => user.username === login.username && user.password === login.password) !== undefined) {
            navigate('/Products')
        } else {
            alert('No existe ese usuario.')
        }
    }

    useEffect(() => {
        async function fetchData() {
            const data = await getAPI(API_USERS_URL)
            setUsers([...data])
        }
        fetchData()
    }, [])

  return (
    <>
        <form action="" onSubmit={handleOnSubmit}>
            <label htmlFor="username">username</label>
            <input onChange={handleOnChange} type="text" id="username" />
            <label htmlFor="password">password</label>
            <input onChange={handleOnChange} type="text" id='password' />

            <input type="submit" value="Login" />
        </form>
    </>
  )
}
