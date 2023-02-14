import React from "react";
import "../css/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/find-love" className="nav-link">
        Find Love
      </Link>
      <Link to="/about-team" className="nav-link">
        About Team
      </Link>
      <Link to="/success-story" className="nav-link">
        Success Story
      </Link>
    </div>
  );
}

export default Navbar;
