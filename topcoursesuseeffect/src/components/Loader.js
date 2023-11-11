import React from 'react'
import BeatLoader from "react-spinners/BeatLoader";
import './Loader.css'

function Loader() {
  return (
    <div className='loader-container'>
        <BeatLoader color="#ffffff" size={"1.5rem"}/>
        <p className='text-loading'>Loading</p>
    </div>
  )
}

export default Loader