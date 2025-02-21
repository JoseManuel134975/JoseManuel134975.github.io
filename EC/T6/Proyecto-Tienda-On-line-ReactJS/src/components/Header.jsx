import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import useQuery from "../hooks/useQuery";
import { useEffect } from "react";
import { Cart } from "react-bootstrap-icons";
import { useDebounce } from "../hooks/useDebounce";

function Header({ Search, categories, allProducts, setProducts, cart }) {
  const query = useQuery();
  const search = query.get("search");
  const debounceSearch = useDebounce(search, 1000);

  const handleOnClick = (event) => {
    const filterProducts = filterByCategory(allProducts, event.target.id);
    setProducts([...filterProducts]);
  };

  const filterByCategory = (arr, category) =>
    arr.filter((product) => product.layout.category === category);

  const filterByName = (arr, value) =>
    arr.filter((product) => {
      return (
        (product.bundle &&
          product.bundle.name.toLowerCase().trim().includes(value.toLowerCase().trim())) ||
        (product.brItems &&
          product.brItems[0].name.toLowerCase().trim().includes(value.toLowerCase().trim())) ||
        (product.tracks &&
          product.tracks[0].title.toLowerCase().trim().includes(value.toLowerCase().trim())) ||
        (product.instruments &&
          product.instruments[0].name.toLowerCase().trim().includes(value.toLowerCase().trim()))
      );
    });

  useEffect(() => {
    const fetchData = async () => {
      const filterProducts = filterByName(allProducts, debounceSearch);
      setProducts([...filterProducts]);
    };
    fetchData();
  }, [debounceSearch]);

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#">Fortnite Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/Products">Home</Nav.Link>
              <Nav.Link href="/Details">Details</Nav.Link>
              <Nav.Link href="/">Logout</Nav.Link>
              <Nav.Link href="/Cart" >
                <Cart size={24}></Cart>
                <b className="ms-2 text-bg-danger badge rounded-circle p-2">{cart.totalProducts}</b>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#">Categories</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {categories.length > 0 &&
                categories.map((categorie, index) => (
                  <Nav.Link key={index} id={categorie} onClick={handleOnClick}>
                    {categorie}
                  </Nav.Link>
                ))}
              <Search />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
