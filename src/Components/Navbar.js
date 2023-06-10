import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">🏨</div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/hotels">Hotels</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
