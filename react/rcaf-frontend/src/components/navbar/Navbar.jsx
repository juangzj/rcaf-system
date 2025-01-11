import "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        {/* Logo or title */}
        <Link to="/" className="brand">RCAF</Link>
        <div className="menu">
          {/* Buttons */}
          <Link to="/login" className="button outline-button">Login</Link>
          <Link to="/register" className="button signup-button">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
