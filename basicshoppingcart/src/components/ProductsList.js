import "./ProductsList.css";
import ProductItem from './ProductItem'

function ProductsList(props) {
  const productsList = props.productsList;

  return (
    <div className="productsList">
      <ProductItem productInfo={productsList[0]}></ProductItem>
      <ProductItem productInfo={productsList[1]}></ProductItem>
      <ProductItem productInfo={productsList[2]}></ProductItem>
    </div>
  );
}

export default ProductsList;
