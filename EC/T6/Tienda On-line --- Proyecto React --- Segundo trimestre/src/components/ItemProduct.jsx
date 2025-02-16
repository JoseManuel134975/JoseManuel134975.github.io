import React from "react";

export default function ItemProduct({ props }) {
  return (
    <>
      <article className="m-auto d-flex flex-column flex-wrap align-items-center justify-content-center gap-3">
        <img
          src={props.images.large}
          alt={"Artista: " + props.artist}
          className="img-fluid m-auto"
        />
        <h3 className="m-auto">{props.name}</h3>
        {props.flavorText ? (
          <p className="m-auto">{props.flavorText}</p>
        ) : (
          <i className="m-auto">La descripción no se encuentra disponible...</i>
        )}
        <b className="m-auto">
          {props.cardmarket.prices.averageSellPrice + " €"}
        </b>
      </article>
    </>
  );
}
