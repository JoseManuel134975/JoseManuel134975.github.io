import { useEffect, useState } from "react";
import { getAPI } from "../utils/getAPI.jsx";

export default function Select() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await getAPI(
        "https://fakestoreapi.com/products/categories"
      );
      setCategories([...response]);
    }
    fetchData();
  },
    []);

  return (
    <>
      <select name="" id="">
        {console.log(categories)}
      </select>
    </>
  );
}
