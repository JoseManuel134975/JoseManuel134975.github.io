import { Link } from "react-router";

export default function Navbar() {
  return (
    <>
        <header>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/Details">Details</Link>
                <Link to="/Cart">Cart</Link>
            </nav>
        </header>
    </>
  );
}
