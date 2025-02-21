import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { getAPI } from "../utils/getAPI";
import { API_ENDPOINT_PRODUCTS } from "../utils/urlsAPI";
import Card from "react-bootstrap/Card";
import Header from "../components/Header";
import Search from "../components/Search";
import Button from "react-bootstrap/Button";

export default function Details() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const handleOnClick = () => {
    navigate("/Products");
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAPI(`${API_ENDPOINT_PRODUCTS}/${id}`);
      setProduct({ ...data });
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAPI(API_ENDPOINT_PRODUCTS);
      const categories = data.map((product) => product.layout.category);
      const uniqueCategories = Array.from(new Set(categories));
      const allCategories = uniqueCategories.filter(
        (categorie) => categorie !== undefined
      );
      const products = data.slice(0, 50);
      setProducts([...products]);
      setAllProducts([...data]);
      setCategories([...allCategories]);
    };
    fetchData();
  }, []);

  return (
    <>
      {console.log(product)}
      <Header
        Search={Search}
        categories={categories}
        allProducts={allProducts}
        setProducts={setProducts}
      />
      <Button onClick={handleOnClick} variant="secondary">
        Return
      </Button>
      <Card className="col col-lg-3" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={
            (product.bundle && product.bundle.image) ||
            (product.brItems &&
              product.brItems[0].images &&
              (product.brItems[0].images.featured ||
                product.brItems[0].images.icon)) ||
            (product.tracks && product.tracks[0].albumArt) ||
            (product.instruments &&
              product.instruments[0].images &&
              product.instruments[0].images.large)
          }
        />
        <Card.Body>
          <Card.Title>
            {(product.bundle && product.bundle.name) ||
              (product.brItems && product.brItems[0].name) ||
              (product.tracks && product.tracks[0].title) ||
              (product.instruments && product.instruments[0].name)}
          </Card.Title>
          <Card.Text>{product.regularPrice} V-Bucks</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
