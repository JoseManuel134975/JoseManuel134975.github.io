import React from 'react'
import Navbar from '../components/Navbar.jsx'
import GridProducts from '../components/GridProducts.jsx'

export default function Products() {
  return (
    <>
      <Navbar />
      <main className='d-flex flex-wrap flex-column justify-content-center'>
        <GridProducts></GridProducts>
      </main>
    </>
    
  )
}
