import React from 'react'

export default function Main({ GridProducts, products, cart, setCart, LoadIcon }) {
  return (
    <>
      <main className='container w-100 mt-5'>
        <GridProducts products={products} cart={cart} setCart={setCart} LoadIcon={LoadIcon} />
      </main>
    </>
  )
}
