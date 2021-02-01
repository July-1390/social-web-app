import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="nav-wrapper red bg-darken-3">
        <div className="container">
          <ul className="right">
            <li>
              <Link to="/postsline">Postsline</Link>
            </li>
            <li>
              <Link to="/subscribes">Subscribes</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
