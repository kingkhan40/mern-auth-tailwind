import React from 'react';
import './App.css';
import Home from './pages/Home';

import { Routes, Route } from 'react-router-dom';
import Login from './component/Login';
import Register from './component/Register';



const App = () => {
  return (
   <>

    <Routes>
    <Route path='/login' element={<Login />}></Route>
    <Route path='/register' element={<Register />}></Route>


      <Route path='/' element={<Home />}></Route>
    
    </Routes>
   </>
  )
}

export default App;