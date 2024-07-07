import React, { useState } from 'react'
import "./login.css"
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Loginpage = ({setUserLogin}) => {

  const navigate = useNavigate();
  const [user,setUser] = useState({
    email: "",
    password: "",
  })

  const handleChange = (e) =>{
    // console.log(e.target);
    const { name ,value } = e.target
    console.log(name, value);
    setUser({
      ...user,
      [name]: value
    })
    console.log(user)
    sessionStorage.setItem('user', JSON.stringify(user))
  }

  const login = () =>{
 
      axios.post('https://login-or-signup-backend.vercel.app/login', user)
      .then(res =>{ 
        alert(res.data.message)  
      setUserLogin(res.data.user)
      
      navigate('/');
      })
  }

  return (
    <div className='login'>
      {console.log("user", user)}
        <h1>Login</h1>
        <input type='email' name="email" value={user.email} placeholder='Enter your Email' onChange={handleChange}></input>
        <input type='password'name="password" value={user.password} placeholder='Enter your Password' onChange={handleChange}></input>
        <div className='button' onClick={ login}>Login</div>
        <div>or</div>
        <div className='button'> <Link to="/register">Register</Link></div>
        
     
    </div>
  )
}

export default Loginpage