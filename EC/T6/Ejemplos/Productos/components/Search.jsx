import Product from './Product.jsx'


export default function Search(){
    let value = ""

    return (
        <>
            <form action="">
                <label htmlFor="search">Buscar: </label>
                <input type="text" id="search" onChange={ (e) => value = e.target.value }/>
            </form>
        </>
    )
}