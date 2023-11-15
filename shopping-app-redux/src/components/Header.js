import logo from "../logo.svg";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import "./Header.css";
import { Link } from "react-router-dom";
import {useSelector} from "react-redux"


function Header() {
  const cartSize = useSelector((state) => state.cart.cartSize)
  return (
    <div className="header">
      <Link to={"/"}>
        <img src={logo} alt="" width={60}/>
      </Link>

      <Link to={"/cart"} className="cart-block">
        <FaShoppingCart size={"1.5rem"} color="white" />
        <div className="cart-size">{cartSize}</div>
      </Link>
    </div>
  );
}

export default Header;
