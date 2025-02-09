export default function ProductDetails({ obj: { id, image, title , description, price, category } }){
    return (
        <>
            <article>
                {/* <img src={ image } alt={ id } />
                <h2>{ title }</h2>
                <p>{ description }</p>
                <b>{ price }€</b>
                <i>Categoría: { category }</i> */}
            </article>
        </>
    )
}