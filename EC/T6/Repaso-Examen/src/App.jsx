import { BrowserRouter, Routes, Route } from "react-router";
import Login from './views/Login';
import Products from './views/Products';
import Details from './views/Details';
import Cart from './views/Cart';
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/Products' element={<Products />}></Route>
          <Route path='/Details/:id' element={<Details />}></Route>
          <Route path='/Cart' element={<Cart />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
