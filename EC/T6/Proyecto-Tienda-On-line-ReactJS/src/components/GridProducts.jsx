import React from 'react'
import Product from './Product'

export default function GridProducts({ products }) {
  return (
    <>
      <section className='row row-cols-lg-4 gap-lg-3'>
        {products.length > 0 && products.map((element, index) => (
          <Product key={index} element={element} />
        ))}
      </section>
    </>
  )
}
