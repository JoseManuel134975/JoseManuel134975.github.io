import { useEffect, useState } from "react"
import { getAPI } from "../utils/httpClient.js"


export default function Product(){
    const [ product, setProduct ] = useState([])

    useEffect(() => {
        async function fetchData(){
             const response = await getAPI('https://fakestoreapi.com/products')
             setProduct(response)
        }

        fetchData()
    }, [  ])

    return (
        <>
            { product.length > 0 && product.map((item) => (
                <article key={ item.id }>
                    <img src={ item.image } alt="Imagen" />
                    <h2>{ item.title }</h2>
                </article>                
            )) }
        </>
    )
}