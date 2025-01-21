import './index.css'
import "../data/products.json"
import Cont from '../components/Cont'
import Tasks from '../components/Tasks'

// import Producto from "../components/Producto.jsx";
// import Cabecera from "../components/Cabecera.jsx";
// import ProductosList from "../components/ProductosList.jsx";
// import Parrafo from "../components/Parrafo.jsx";

export default function MyApp() {
  // const objProduct = {
  //   title: "Teclado",
  //   description: "Logitech 915",
  //   price: 21
  // }

  return(
    <>
      <Cont></Cont>
      <Tasks></Tasks>
    </>
  )
}