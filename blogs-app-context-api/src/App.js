import "./App.css";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="header">Latest Blogs</div>
      <div className="container">
        <Blogs />
      </div>
      <Footer />
    </div>
  );
}

export default App;
