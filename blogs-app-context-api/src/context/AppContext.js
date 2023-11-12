import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [currPage, setCurrPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [posts, setPosts] = useState([]);

  async function fetchBlogs(page) {
    try {
      setLoading(true);
      const fetchedData = await axios.get(
        `https://codehelp-apis.vercel.app/api/get-blogs?page=${currPage}`
      );

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
    fetchBlogs
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
