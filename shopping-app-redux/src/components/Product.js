import React, { useEffect, useState } from "react";
import "./Product.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/slice/CartSlice";
import toast from "react-hot-toast";

const Product = (props) => {
  // id, title, price, description, category, image, rating -> rate, count
  const data = props.data;
  const dispatch = useDispatch();
  const [isProductInCart, setProductInCart] = useState(false);

  const cart = useSelector((state) => state.cart);

  function addProductToCart() {
    dispatch(addToCart(data));
    toast.success("Product added to cart");
  }

  function removeProductFromCart() {
    dispatch(removeFromCart(data.id));
    toast.error("Product removed from cart");
  }

  useEffect(() => {
    const products = cart.products;

    if(products.includes(data)){
      setProductInCart(true);
    } else{
      setProductInCart(false);
    }
  }, [cart]);

  return (
    <div className="product-card">
      <div className="title">{data.title.substring(0, 20)}...</div>
      <div className="image">
        <img src={data.image} alt="" width={150} />
      </div>
      <div className="price-and-category-block">
        <div className="price">₹{data.price}</div>
        <div className="category">{data.category}</div>
      </div>

      <div className="cart-btns">
        {isProductInCart ? <button className="remove-cart-btn" onClick={removeProductFromCart} >Remove from cart</button> : <button className="add-to-cart-btn" onClick={addProductToCart}>Add to cart</button>}
      </div>
    </div>
  );
};

export default Product;
