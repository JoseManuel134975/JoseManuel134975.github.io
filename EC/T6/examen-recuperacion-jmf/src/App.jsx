import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router";
import Loginpage from './views/Loginpage.jsx'
import Principalpage from './views/Principalpage.jsx'
import Postpage from './views/Postpage.jsx'
import Tareaspage from './views/Tareaspage.jsx'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Loginpage />}></Route>
          <Route path='/Principalpage' element={<Principalpage />}></Route>
          <Route path='/Postpage' element={<Postpage />}></Route>
          <Route path='/Tareaspage' element={<Tareaspage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
