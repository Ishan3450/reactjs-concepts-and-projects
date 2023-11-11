import "./App.css";
import AddProduct from "./components/AddProduct";
import ProductsList from "./components/ProductsList";

function App() {
  let products = [
    {
      productName: "Nirma",
      expiryDate: {
        day: "10",
        month: "March",
        year: "2024",
      },
    },
    {
      productName: "Surf Excel",
      expiryDate: {
        day: "15",
        month: "June",
        year: "2024",
      },
    },
    {
      productName: "Nirma",
      expiryDate: {
        day: "31",
        month: "December",
        year: "2023",
      },
    },
  ];

  function addProduct(productObject) {
    console.log(productObject);
  }

  return (
    <div className="App">
      <div className="container add-product-form">
        <AddProduct addProduct={addProduct} />
      </div>
      <div className="container">
        <ProductsList productsList={products}></ProductsList>
      </div>
    </div>
  );
}

export default App;
