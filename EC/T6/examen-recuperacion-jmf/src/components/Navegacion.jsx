import React from 'react'
import { Link } from 'react-router'

export default function Navegacion() {
  return (
    <>
        <nav>
            <Link to="/Postpage">Postpage</Link>
            <Link to="/Tareaspage">Tareaspage</Link>
            {/* <Link to="">Link 3</Link> */}
            {/* <Link to="">Link 4</Link> */}
        </nav>
    </>
  )
}
