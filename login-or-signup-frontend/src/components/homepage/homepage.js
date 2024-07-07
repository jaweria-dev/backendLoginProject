import React from 'react'
import "./homepage.css"

const Homepage = ({setUserLogin}) => {
  const handleLogout = ()=> {
    setUserLogin({})
  sessionStorage.removeItem('user')
  }
  return (
    <div className='homepage'>
      <h1>Homepage</h1>
      <div className='button' onClick={handleLogout}>LogOut</div>
    </div>
  )
}

export default Homepage
