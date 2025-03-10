import React, { useEffect, useState } from "react";
import { getAPI } from "../utils/getAPI";
import Comentarios from "./Comentarios";

export default function Post({ post }) {
  const [isComments, setIsComments] = useState(false);
  const [comments, setComments] = useState([])

  const handleOnClick = () => {
    isComments ? setIsComments(false) : setIsComments(true);
  };

  useEffect(() => {
    async function fetchData() {
      if(isComments) {
          const data = await getAPI(
            `https://jsonplaceholder.typicode.com/posts/${post.id}/comments`
          );
          setComments([...data]);
      }
    }
    fetchData();
  }, [isComments]);

  return (
    <>
      <article>
        <h3>{post.title}</h3>
        <button onClick={handleOnClick}>{!isComments ? "+" : "-"}</button>
        <Comentarios isComments={isComments} comments={comments} ></Comentarios>
      </article>
    </>
  );
}
