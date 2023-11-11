import React from 'react'

function Dashboard(props) {
  return (
    <div className='pageContainer'>Welcome, {props.userData.fname} !!</div>
  )
}

export default Dashboard