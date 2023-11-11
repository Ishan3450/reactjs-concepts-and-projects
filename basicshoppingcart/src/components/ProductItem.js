import ExpiryDate from "./ExpiryDate";
import "./ProductItem.css";
import { useState } from "react";

function ProductItem(props) {
  const [title, setTitle] = useState(props.productInfo.productName);

  function handleClick() {
    setTitle("Pop kaun")
  }

  return (
    <div className="productItem">
      <ExpiryDate expiryDate={props.productInfo.expiryDate}></ExpiryDate>
      <div className="productName">{title}</div>
      <button type="button" onClick={handleClick} id="atoc">
        Add to cart
      </button>
    </div>
  );
}

export default ProductItem;
