import { Link } from "react-router";

export default function Navbar() {
  return (
    <>
        <header>
            <nav>
                {/* <Link to="/">Login</Link> */}
                <Link to="/Home">Home</Link>
                <Link to="/Details">Details</Link>
                <Link to="/Cart">Cart</Link>
            </nav>
        </header>
    </>
  );
}
