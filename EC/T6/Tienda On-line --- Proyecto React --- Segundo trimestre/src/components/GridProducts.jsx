import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getAPI } from "../utils/getAPI.jsx";
import { Link } from "react-router";

export default function GridProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await getAPI(
        "https://api.pokemontcg.io/v2/cards?pageSize=100"
      );
      setProducts([...response.data]);
    }
    fetchData();
  }, []);

  return (
    <>
      {console.log(products)}
      <section className="row row-cols-md-4 row-cols-sm-2 gy-5 m-auto">
        {products.length > 0 &&
          products.map(element => (
            <article
              key={element.id}
              className="col col-md-3 col-sm-6 d-flex flex-column flex-wrap align-items-center justify-content-center gap-3"
            >
              <Link to={`/Details/${element.id}`}>
                <img
                  src={element.images.large}
                  alt={"Artista: " + element.artist}
                  className="img-fluid m-auto"
                />
              </Link>
              <h3 className="m-auto">{element.name}</h3>
              {element.flavorText ? (
                <p className="m-auto">{element.flavorText}</p>
              ) : (
                <i className="m-auto">
                  La descripción no se encuentra disponible...
                </i>
              )}
              <b className="m-auto">
                {element.cardmarket.prices.averageSellPrice + " €"}
              </b>
            </article>
          ))}
      </section>
    </>
  );
}
