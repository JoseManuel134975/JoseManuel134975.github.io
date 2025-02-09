import Product from './Product.jsx'

export default function Grid() {
  return (
    <>
      <section className='row row-cols-lg-4 justify-content-lg-center align-items-lg-center mt-lg-3 gap-3'>
        <Product></Product>
        <div>Grid</div>
      </section>
    </>
  )
}
