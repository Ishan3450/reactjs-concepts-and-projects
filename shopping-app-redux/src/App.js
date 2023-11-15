import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Products from "./components/Products";
import Cart from "./components/Cart";
import {Toaster} from "react-hot-toast"

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
      <Toaster />
    </div>
  );
}

export default App;
