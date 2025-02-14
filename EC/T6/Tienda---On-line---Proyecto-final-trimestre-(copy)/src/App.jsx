import { BrowserRouter, Routes, Route } from "react-router";
import Products from "./views/Products.jsx";
import Details from "./views/Details.jsx";
import Cart from "./views/Cart.jsx";
import Login from "./views/Login.jsx";
import Register from "./views/Register.jsx";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/Details" element={<Details />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
