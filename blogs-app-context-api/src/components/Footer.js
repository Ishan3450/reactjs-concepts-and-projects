import React, {useContext} from 'react'
import "./Footer.css"
import { AppContext } from '../context/AppContext'

function Footer() {

  const { currPage, totalPages, fetchBlogs} = useContext(AppContext);

  return (
    <div className='footer'>
      <div className="footer-container">
        <div className="btns-pagination">
          {currPage !== 1 && (<button onClick={() => fetchBlogs(currPage-1)}>Previous</button>)}

          {currPage !== totalPages && (<button onClick={() => fetchBlogs(currPage+1)}>Next</button>)}
        </div>
        <div className='pages-info'>Page <span>{currPage}</span> of <span>{totalPages}</span></div>
      </div>
    </div>
  )
}

export default Footer