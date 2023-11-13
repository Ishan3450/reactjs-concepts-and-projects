import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";
import Blog from "./Blog";
import "./Blogs.css"

function Blogs() {
  const { loading, posts } = useContext(AppContext);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <div className="no-posts">No posts found</div>
      ) : (
        <div className="blogs">
          {posts.map((blogData) => (
            <Blog key={blogData.id} data={blogData} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Blogs;
