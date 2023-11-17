import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../BaseURL";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [currPage, setCurrPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [posts, setPosts] = useState([]);

  async function fetchBlogs(page, tag = false, category = false) {
    try {
      setLoading(true);

      let url = `${baseUrl}?page=${page}`;

      // at a point of time either tag or category will be there
      if (tag) {
        url += `&tag=${tag}`;
      }
      if (category) {
        url += `&category=${category}`;
      }

      const fetchedData = await axios.get(url);

      setPosts(fetchedData.data.posts);
      setCurrPage(page);
      setTotalPages(fetchedData.data.totalPages);
      setLoading(false);
    } catch (e) {
      // revert back
      setLoading(false);
      setCurrPage(1);
      setTotalPages(1);
      setPosts([]);
    }
  }

  useEffect(() => {
    fetchBlogs(currPage);
  }, []);

  const value = {
    loading,
    setLoading,
    currPage,
    setCurrPage,
    totalPages,
    setTotalPages,
    posts,
    setPosts,
    fetchBlogs,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
