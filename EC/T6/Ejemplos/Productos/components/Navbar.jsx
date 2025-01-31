import { Link } from "react-router"

export default function Navbar(){
    return (
        <>
            <nav>
                <Link to="/">Index</Link>
                <Link to="/detalles">Detalles</Link>
                <Link to="/ofertas">Ofertas</Link>
            </nav>
        </>
    )
}