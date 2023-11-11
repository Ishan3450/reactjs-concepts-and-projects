import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="nav-container">
      <div className="logo">Ishan's Dashboard</div>

      <div className="pages">
        <NavLink className="pageLink" to="/">Home</NavLink>
        <NavLink className="pageLink" to="/about">About</NavLink>
        <NavLink className="pageLink" to="/contact">Contact</NavLink>
      </div>

      <div className="utilities">
        {/* when not logged in */}
        <NavLink className="utilityLink" to="/login">Login</NavLink>
        <NavLink className="utilityLink" to="/signup">Signup</NavLink>

        {/* when logged in */}
        <button className="utilityLink">Log Out</button>
        <NavLink className="utilityLink" to="/dashboard">Dashboard</NavLink>
      </div>
    </div>
  );
}

export default NavBar;
