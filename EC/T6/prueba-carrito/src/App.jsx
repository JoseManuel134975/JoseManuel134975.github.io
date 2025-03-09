import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Login from "./views/Login";
import Products from "./views/Products";
import Details from "./components/Details";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Details/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
