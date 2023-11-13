import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./components/HomePage";
import TagsPage from "./components/TagsPage";
import CategoriesPage from "./components/CategoriesPage";
import BlogPage from "./components/BlogPage";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import Footer from "./components/Footer";

function App() {
  // const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const { currPage, fetchBlogs } = useContext(AppContext);

  function handleAddressBarChange() {
    // const pageNum = searchParams.get("page") ?? 1; // default 1

    if (location.pathname.includes("tags")) {
      fetchBlogs(currPage, location.pathname.split("/").at(-1), false);
    } else if (location.pathname.includes("categories")) {
      fetchBlogs(currPage, false, location.pathname.split("/").at(-1));
    } else if (!location.pathname.includes("blogs")){
      // simple call with only page number
      fetchBlogs(currPage, false, false);
    }
  }

  useEffect(handleAddressBarChange, [location.pathname, location.search]);

  return (
    <div className="App">
      <div className="header">Latest Blogs</div>
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tags/:tag" element={<TagsPage />} />
          <Route path="/categories/:category" element={<CategoriesPage />} />
          <Route path="/blogs/:blogId" element={<BlogPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
