import { BrowserRouter, Route, Routes } from 'react-router'
import Index from "../views/Index.jsx"
import Detalles from "../views/Detalles.jsx"
import Ofertas from "../views/Ofertas.jsx"
import './App.css'

function MyApp() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Index /> }></Route>
          <Route path='/detalles/:id' element={ <Detalles /> }></Route>
          <Route path='/ofertas' element={ <Ofertas /> }></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default MyApp
