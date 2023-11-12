import React from "react";
import "./Blog.css"

function Blog(props) {
  const { title, author, date, category, tags, content } = props.data;
  return (
    <div className="blog-card">
      <div className="title">{title}</div>
      <div className="basic-info">
        <div className="author-and-release-block">
          By <span className="author">{author}</span> on{" "}
          <span className="release-date">{date}</span>
        </div>
        <div className="category">{category}</div>
      </div>
      <div className="blog-content">
        {content}
      </div>
      <div className="tags">
        {tags.map(tag => (<div className="blog-tag">#<span className="blog-tag-name">{tag}</span></div>))}
      </div>
    </div>
  );
}

export default Blog;
