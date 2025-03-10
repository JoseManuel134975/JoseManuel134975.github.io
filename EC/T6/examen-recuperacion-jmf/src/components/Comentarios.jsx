import React from "react";

export default function Comentarios({ isComments, comments }) {
  return (
    <>
      {isComments &&
        comments.length > 0 &&
        comments.map((comment) => (
          <article key={comment.id}>
            <h3>Nombre: {comment.name}</h3>
            <p>{comment.body}</p>
            <i>Email: {comment.email}</i>
          </article>
        ))}
    </>
  );
}
