import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Blog from "./Blog";
import "./Pages.css";
import Blogs from "./Blogs";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { singleBlogUrl } from "../BaseURL";

export default function BlogPage() {
  const navigate = useNavigate();

  const { setPosts, setLoading, setCurrPage, setTotalPages } =
    useContext(AppContext);
  const location = useLocation();
  const [blogData, setBlogData] = useState({});

  async function fetchSingleBlogWithRelatedBlogs() {
    const url = `${singleBlogUrl}?blogId=${location.pathname
      .split("/")
      .at(-1)}`;
    // console.log(url)
    try {
      setLoading(true);
      const fetchedData = await axios.get(url);
      console.log("URL in the blog page " , url)
      setBlogData(fetchedData.data.blog);
      setPosts(fetchedData.data.relatedBlogs);
      setCurrPage(1);
      setTotalPages(1);
      setLoading(false);
    } catch (error) {
      console.log("Error while fetching single blog data with id");
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchSingleBlogWithRelatedBlogs();
  }, []);

  return (
    <div className="page">
      <div className="page-header">
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
      <Blog data={blogData} />
      <div className="related-blogs">
        <p>Related Blogs</p>
        <Blogs />
      </div>
    </div>
  );
}
