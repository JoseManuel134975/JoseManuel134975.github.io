import Buscador from "../components/Buscador";
import Post from "../components/Post";
import { getAPI } from "../utils/getAPI";
import React, { useEffect, useState } from "react";

export default function Postpage() {
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const userJSON = localStorage.getItem("user");
  const user = JSON.parse(userJSON);

  useEffect(() => {
    async function fetchData() {
      const data = await getAPI(
        `https://jsonplaceholder.typicode.com/posts?userId=${user.id}`
      );
      setPosts([...data]);
      setAllPosts([...data]);
    }
    fetchData();
  }, []);

  return (
    <>
      <Buscador allPosts={allPosts} setPosts={setPosts} ></Buscador>
      <section>
        {
            posts.length > 0 && posts.map((post) => (
                <Post post={post} key={post.id}></Post>
            ))
        }
      </section>
    </>
  );
}
