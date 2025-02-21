import React from "react";
import { Link } from "react-router";

export default function Navbar() {
  return (
    <>
      <nav>
        <Link to="/Products">Productos</Link>
        <Link to="/Details">Detalles</Link>
        <Link to="/Cart">Carrito</Link>
      </nav>
    </>
  );
}
