import React from "react";
import { useSelector } from "react-redux";
import ProductsInCart from "./ProductsInCart"
import "./Cart.css"

function Cart() {
  const {products, totalCartAmount, cartSize} = useSelector(state => state.cart);


  return (
    <div className="cart-container">
      <div className="cart-summary">
        <div className="summary-info">
          <div className="total-items">Total Products in your cart: {cartSize}</div>
          <div className="total-amount">Total amount to be paid ₹{totalCartAmount}</div>
        </div>
        <button className="btn-checkout">Checkout</button>
      </div>

      <div className="products-in-cart">
        <p className="incart-products-heading">Incart Products</p>
        {products.map(product => <ProductsInCart data={product} />)}
      </div>
    </div>
  );
}

export default Cart;
