import React from "react";

function Navbar() {
  return (
    <div className="nav-container">
      <nav className="navbar">
        <h2 className="manager">
          Man<span>ager</span>
        </h2>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Events</a>
          </li>
          <li>
            <a href="#">Employees</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
