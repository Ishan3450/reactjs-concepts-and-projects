import "./AddProduct.css";
import { useState } from "react";

function AddProduct(props) {
  const [productName, setProductName] = useState();
  const [expiryDate, setExpiryDate] = useState();

  function productNameListnerFunction(event) {
    setProductName(event.target.value);
  }

  function expiryDateListnerFunction(event) {
    setExpiryDate(event.target.value);
  }

  function completeProductInfo(event) {
    event.preventDefault();
    const product = {
        productName: productName,
        expiryDate: expiryDate
    }

    // emptying the input fields
    setProductName('')
    setExpiryDate('')

    props.addProduct(product);
  }

  return (
    <div>
      <form>
        <div className="form-div">
          <label htmlFor="productName">Product Name: </label>
          <input
            type="text"
            name="productName"
            id="inputProductName"
            onChange={productNameListnerFunction}
            value={productName}
          />
        </div>
        <div className="form-div">
          <label htmlFor="productExpiryDate">Expiry Date: </label>
          <input
            type="date"
            name="productExpiryDate"
            id="inputProductExpiryDate"
            min="2024-01-01"
            onChange={expiryDateListnerFunction}
            value={expiryDate}
          />
        </div>
        <div className="form-btn">
          <button type="submit" onClick={completeProductInfo}>
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddProduct;
