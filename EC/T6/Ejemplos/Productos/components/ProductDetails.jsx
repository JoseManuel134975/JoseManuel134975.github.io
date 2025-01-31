export default function ProductDetails({ obj: { id, image, title, description, price, category } }){
    return (
        <>
            <img src={ image } alt={ id } />
            <h2>{ title }</h2>
            <p>{ description }</p>
            <b>{ price }€</b>
            <br />
            <i>Categoría: { category }</i>
        </>
    )
}