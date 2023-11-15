import React from 'react'
import "./ProductsInCart.css"
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/slice/CartSlice';
import toast from 'react-hot-toast';

function ProductsInCart(props) {
  // id, title, price, description, category, image,rating -> rate, count
  const data = props.data;
  const dispatch = useDispatch();
  
  function removeProductFromCart() {
    toast.error("Product removed from cart")
    dispatch(removeFromCart(data.id));
  }

  return (
    <div className='incart-product-container'>
      <div className="image-part">
        <img src={data.image} alt="" width={150}/>
      </div>
      <div className="info-part">
        <div className="title">{data.title}</div>
        <div className="description">{data.description}</div>
        <div className="category">{data.category}</div>
        <div className="price-with-delete-btn">
          <div className="price">₹{data.price}</div>
          <button className='remove-from-cart-btn' onClick={removeProductFromCart}>Remove from cart</button>
        </div>
      </div>
    </div>
  )
}

export default ProductsInCart