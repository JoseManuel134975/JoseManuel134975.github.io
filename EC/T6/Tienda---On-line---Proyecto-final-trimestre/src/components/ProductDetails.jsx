export default function ProductDetails({ obj: { id, image, , description, price, category } }){
    return (
        <>
            <article>
                <img src={ image } alt={ id } />
                <h2>{  }</h2>
                <p>{ description }</p>
                <b>{ price }€</b>
                <i>Categoría: { category }</i>

            </article>
        </>
    )
}