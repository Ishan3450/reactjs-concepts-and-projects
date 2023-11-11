import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./NavBar.css";
import toast from "react-hot-toast";

function NavBar(props) {
  const navigate = useNavigate();

  function logOut() {
    props.setLoginStatus(false);
    toast.success("Logged Out")
    navigate("/")
  }

  return (
    <div className="nav-container">
      <div className="logo">{props.isLoggedIn ? (props.activeUserName + "'s Dashboard") : "Logo"}</div>

      <div className="pages">
        <NavLink className="pageLink" to="/">
          Home
        </NavLink>
        <NavLink className="pageLink" to="/about">
          About
        </NavLink>
        <NavLink className="pageLink" to="/contact">
          Contact
        </NavLink>
      </div>

      <div className="utilities">
        {/* when not logged in */}
        {!props.isLoggedIn && (
          <NavLink className="utilityLink" to="/login">
            Login
          </NavLink>
        )}
        {!props.isLoggedIn && (
          <NavLink className="utilityLink" to="/signup">
            Signup
          </NavLink>
        )}

        {/* when logged in */}
        {props.isLoggedIn && (
          <NavLink className="utilityLink" to="/dashboard">
            Dashboard
          </NavLink>
        )}
        {props.isLoggedIn && <button className="utilityLink" onClick={logOut}>Log Out</button>}
      </div>
    </div>
  );
}

export default NavBar;
