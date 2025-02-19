import React from 'react'
import Navbar from '../components/Navbar.jsx'
import FlexCart from '../components/FlexCart.jsx'

export default function Cart() {
  return (
    <>
      <Navbar />  
      <main className='d-flex flex-column flex-wrap gap-3 mt-5'>
        <FlexCart />
      </main>
    </>
  )
}
