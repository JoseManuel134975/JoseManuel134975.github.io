import React from 'react'

export default function Main({ GridProducts, products }) {
  return (
    <>
      <main className='container w-100 mt-5'>
        <GridProducts products={products} />
      </main>
    </>
  )
}
