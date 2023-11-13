import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import "./Pages.css"
import Blogs from './Blogs';

function CategoriesPage() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className='page'>
      <div className="page-header">
        <button onClick={() => navigate(-1)}>Back</button>
        <p>Blogs on {location.pathname.split("/").at(-1).replaceAll("%20", " ")}</p>
      </div>
      <Blogs />
    </div>
  )
}

export default CategoriesPage