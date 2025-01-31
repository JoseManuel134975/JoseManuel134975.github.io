import { useEffect, useState } from "react"
import { getAPI } from "../utils/httpClient.js"
import { Link } from "react-router"


export default function Product(){
    const [ products, setProducts ] = useState([])

    useEffect(() => {
        async function fetchData(){
             const response = await getAPI('https://fakestoreapi.com/products')
             setProducts(response)
        }

        fetchData()
    }, [  ])

    return (
        <>
            { products.length > 0 && products.map((item) => (
                <article key={ item.id }>
                    <Link to={ `/detalles/${ item.id }` }><img src={ item.image } alt={ item.id } /></Link>
                    <h2>{ item.title }</h2>
                </article>                
            )) }
        </>
    )
}