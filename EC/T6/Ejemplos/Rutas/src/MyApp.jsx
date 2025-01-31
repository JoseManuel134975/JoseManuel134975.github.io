import './App.css'
import Navbar from "../components/Navbar.jsx"
import Home from "../views/Home.jsx"
import Detail from "../views/Detail.jsx"
import { BrowserRouter, Routes, Route } from 'react-router'

function MyApp() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/Detail' element={ <Detail /> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default MyApp
