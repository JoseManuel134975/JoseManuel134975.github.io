import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Home from "./views/Home.jsx";
import Details from "./views/Details.jsx";
import Cart from "./views/Cart.jsx";
import Login from "./views/Login.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Details" element={<Details />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
