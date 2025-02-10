import { useState } from 'react'
import { useNavigate } from 'react-router'

export default function Search(){
    const [ textValue, setTextValue ] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Buscando", textValue);
        navigate("/Home?search=" + textValue)
    }

    return (
        <>
            <form action="" className='form form-container' onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor="search">Buscar: </label>
                <input className='form-control' type="text" id="search" onChange={ (e) => setTextValue(e.target.value) }/>
                <input className='btn btn-primary' type="submit" value="Buscar" />
            </form>
        </>
    )
}