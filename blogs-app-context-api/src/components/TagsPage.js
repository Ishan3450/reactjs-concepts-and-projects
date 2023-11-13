import React from "react";
import "./Pages.css";
import { useLocation, useNavigate } from "react-router-dom";
import Blogs from "./Blogs";

function TagsPage() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="page">
      <div className="page-header">
        <button onClick={() => navigate(-1)}>Back</button>
        <p>
          Blogs tagged <span>#{location.pathname.split("/").at(-1).replaceAll("%20", " ")}</span>
        </p>
      </div>
      <Blogs />
    </div>
  );
}

export default TagsPage;
