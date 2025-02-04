import { getAPI } from "../utils/getAPI.jsx";
import { useEffect, useState } from "react";
import { Link } from "react-router";

export default function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await getAPI("https://fortnite-api.com/v2/shop");
      setProducts([...response.data.entries]);
    }

    fetchData();
  }, []);

  return (
    <>
      {console.log(products)}
      {products.length > 0 &&
        products.map(
          (item) =>
            item.hasOwnProperty("brItems") &&
            item.brItems.map(
              (item) => (
                console.log(item.images.featured),
                item.hasOwnProperty("images") && item.images.hasOwnProperty("featured") ? <img width="200px" src={ item.images.featured } alt="" /> : "",
                <p>{item.description}</p>
              )
            )
            // <article key={item.id}>
            //   <Link to={`/Details/${item.id}`}>
            //     <img src={item.image} alt={item.id} />
            //   </Link>
            // </article>
        )}
      <div>Product</div>
    </>
  );
}
