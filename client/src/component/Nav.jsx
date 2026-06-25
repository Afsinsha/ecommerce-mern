import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Nav.css";

function Nav() {
  return (
    <nav className="navbar">
      <h1 className="logo">MyStore</h1>

      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/add-product">Add Product</Link>
        </li>

        <li>
          <Link to="/products">Products</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;