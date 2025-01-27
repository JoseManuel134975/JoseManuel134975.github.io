import { useEffect, useState } from "react";
import products from "../data/productos.json";

export default function Carrusel() {
  const [index, setIndex] = useState(1);
  const [product, setProduct] = useState({});

  useEffect(() => {
    document.title = index;
    localStorage.setItem("index", index);
     fetch("https://fakestoreapi.com/products/" + index)
      .then((res) => res.json())
      .then((json) => { 
        setProduct(json)
     });

  }, [index]);

  return (
    <>
      <img src={product.image} alt="Imagen" width="200px" />
      <p>{product.title}</p>
      <button
        onClick={() => {
          setIndex(index + 1);
        }}
      >
        Next
      </button>
    </>
  );
}
