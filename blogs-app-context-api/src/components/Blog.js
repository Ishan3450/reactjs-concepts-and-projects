import React from "react";
import "./Blog.css";
import { Link } from "react-router-dom";

function Blog(props) {
  const { title, author, date, category, tags, content, id } = props.data;
  return (
    <div className="blog-card">
      <Link className="title" to={`/blogs/${id}`}>{title}</Link>
      <div className="basic-info">
        <div className="author-and-release-block">
          By <span className="author">{author}</span> on{" "}
          <span className="release-date">{date}</span>
        </div>
        <Link className="category" to={`/categories/${category}`} >{category}</Link>
      </div>
      <div className="blog-content">{content}</div>
      <div className="tags">
        {tags?.map((tag, index) => (
          <Link key={index} className="blog-tag" to={`/tags/${tag}`}>
            #<span className="blog-tag-name">{tag}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Blog;
