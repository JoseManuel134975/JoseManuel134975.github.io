import "./App.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Login from "./views/Login.jsx";
import Products from "./views/Products.jsx";
import Details from "./views/Details.jsx";
import Cart from "./views/Cart.jsx";
import Register from "./views/Register.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Details/:id" element={<Details />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
