import React, { useContext, useEffect } from "react";
import "./Footer.css";
import { AppContext } from "../context/AppContext";
import { useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation();
  const { currPage, totalPages, fetchBlogs, setCurrPage, setTotalPages } = useContext(AppContext);

  function handlePageChange(page) {
    if (location.pathname.includes("blogs")) {
      // setCurrPage(1);
      // setTotalPages(1);
    } else if (location.pathname.includes("tags")) {
      fetchBlogs(page, location.pathname.split("/").at(-1), false);
    } else if (location.pathname.includes("categories")) {
      fetchBlogs(page, false, location.pathname.split("/").at(-1));
    } else {
      // simple call with only page number
      fetchBlogs(page, false, false);
    }
  }

  useEffect(() => handlePageChange(currPage), [location.pathname, location.search]);

  return (
    <div className="footer">
      <div className="footer-container">
        <div className="btns-pagination">
          {currPage !== 1 && (
            <button onClick={() => handlePageChange(currPage - 1)}>
              Previous
            </button>
          )}

          {currPage !== totalPages && (
            <button onClick={() => handlePageChange(currPage + 1)}>Next</button>
          )}
        </div>
        <div className="pages-info">
          Page <span>{currPage}</span> of <span>{totalPages}</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
