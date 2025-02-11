import { useParams } from "react-router";
import { useState, useEffect } from "react"
import { getAPI } from "../utils/getAPI.jsx";
import NavbarHeader from '../components/NavbarHeader.jsx'
import ProductDetails from '../components/ProductDetails.jsx'


export default function Details() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    async function fetchData() {
      const response = await getAPI(`https://fakestoreapi.com/products/${ id }`);
      setProduct(response);
    }

    fetchData();
  }, [ ]);
  
  return (
    <>
      <NavbarHeader></NavbarHeader>
      <section className='container container-fluid d-flex flex-wrap flex-row align-items-center justify-content-center'>
        <ProductDetails obj={product}></ProductDetails>
      </section>
    </>
  )
}
