import React from "react";

export default function ItemProduct({ props }) {
  return (
    <>
      <article className="m-auto d-flex flex-column flex-wrap align-items-center justify-content-center gap-3 mt-5">
        <img
          src={props.image}
          alt={"Artista: " + props.description}
          className="img-fluid m-auto"
        />
        <h3 className="m-auto">{props.title}</h3>
        {props.description ? (
          <p className="m-auto">{props.description}</p>
        ) : (
          <i className="m-auto">La descripción no se encuentra disponible...</i>
        )}
        <b className="m-auto">
          {props.price + " €"}
        </b>
      </article>
    </>
  );
}
