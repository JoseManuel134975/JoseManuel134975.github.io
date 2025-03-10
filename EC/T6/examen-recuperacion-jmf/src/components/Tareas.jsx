import React, { useEffect, useState } from "react";
import Tarea from "./Tarea";
import { getAPI } from "../utils/getAPI";

export default function Tareas() {
  const [tareas, setTareas] = useState([]);
  const userJSON = localStorage.getItem("user");
  const user = JSON.parse(userJSON);
  const [completed, setCompleted] = useState(0)


  useEffect(() => {
    async function fetchData() {
      const data = await getAPI(
        `https://jsonplaceholder.typicode.com/users/${user.id}/todos`
      );
      setTareas([...data]);
    }
    fetchData();
  }, []);

  return (
    <>
      <section>
        {tareas.length > 0 &&
          tareas.map((tarea) => (
            <Tarea tarea={tarea} completed={completed} setCompleted={setCompleted} key={tarea.id}></Tarea>
          ))}
        <h3>
          {completed} completadas de {tareas.length} totales
        </h3>
      </section>
    </>
  );
}
