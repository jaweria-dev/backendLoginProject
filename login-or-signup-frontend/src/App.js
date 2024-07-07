
import './App.css';
import Loginpage from './components/login/login';
import Register from './components/register/register';
import Homepage from './components/homepage/homepage';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useState } from 'react';


function App() {

  const [user, setUserLogin] = useState({})
  const authUser = sessionStorage.getItem('user');
  console.log(authUser);
  return (
    <div className="App">
   <BrowserRouter >
      <Routes>
      <Route exact path='/' element={authUser ? <Homepage setUserLogin={setUserLogin}/> : <Loginpage setUserLogin={setUserLogin} />}></Route>
         <Route path='/register' element={<Register />}></Route>
         <Route path='/login' element={<Loginpage  setUserLogin={setUserLogin}/> }></Route>
      </Routes>
   </BrowserRouter>
    
     
    </div>
  );
}

export default App;