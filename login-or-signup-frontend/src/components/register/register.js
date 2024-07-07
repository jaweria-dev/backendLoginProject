import React, { useState } from 'react'
import "./register.css"
import {  Link } from 'react-router-dom' 
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const Register = () => {
  // const [name, setName] = useState();
  // const [email, setEmail] = useState();
  // const [password, setPassword] = useState();
  // const [reEnterPassword, setReEnterPassword] = useState();

//   const userData = {
//     name: name,
//     email: email,
//     password: password,
//     reEnterPassword: reEnterPassword
// };

//   const handleSubmit = (e) =>{
//     e.preventDefault()
//     axios.post('hthttp://localhost:3000/register',userData)
//     .then(result => console.log(result))
//     .catch(err => console.log(err))
//   }
const navigate = useNavigate();
  const [user,setUser] = useState({
    name : "",
    email: "",
    password: "",
    reEnterPassword :""
  })

  const handleChange = (e) =>{
    // console.log(e.target);
    const { name ,value } = e.target
    console.log(name, value);
    setUser({
      ...user,
      [name]: value
    })
    sessionStorage.setItem('user', JSON.stringify(user));
  }

  // const register = async(e) =>{
    
  //   e.preventDefault()
  //   const { name, email, password, reEnterPassword } = user
  //   if (name && email && password && (password === reEnterPassword)) {
  //     try {
  //       const res = await axios.post('http://localhost:3000/register', user);
  //       alert(res.data.message);
  //       navigate('/login');
  //     } catch (error) {
  //       console.error('Error:', error.response ? error.response.data : error.message);
  //     }
  //   } else {
  //     alert('Invalid Input');
  //   }
  // }

  const register = () => {
    const { name, email, password, reEnterPassword } = user
    if( name && email && password && (password === reEnterPassword)){
        axios.post("https://login-or-signup-backend.vercel.app/register", user)
        .then( res => {
            alert(res.data.message)
            navigate('/login');
        })
    } else {
        alert("invlid input")
    }
    
}
  return (
    
    <div className='register'>
      {console.log("user", user)}
      
    <h1>Register</h1>
    {/* <form onSubmit={handleSubmit}> */}
    <input type='email' name="name" value={user.name} placeholder='Your name' onChange={handleChange}></input>
    <input type='email' name = "email" value={user.email} placeholder='Your Email' onChange={handleChange}></input>
    <input type='password'name = "password" value={user.password} placeholder='Your Password' onChange={handleChange}></input>
    <input type='password' name = "reEnterPassword" value={user.reEnterPassword} placeholder='Re-Enter Password' onChange={handleChange}></input>
    <div className='button' onClick={register}>Register</div>
    {/* </form> */}
    <div>or</div>
    <div className='button'><Link to="/login">Login</Link></div>
    
 
</div>
  )
}

export default Register