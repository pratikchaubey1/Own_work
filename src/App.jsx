import React, { useEffect, useState } from 'react';
import { createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';

import Home from './page/Home';

import Contact from './page/Contact';
import Login from './page/Login';
import Cart from './page/Cart';
import Signup from './page/Signup';
import About from './page/About';
import Navbar from './components/Navbar';
import Footer from './page/footer/Footer';

function App() {
 
  
  return(
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/Contect' element={<Contact />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Signup' element={<Signup/>} />
      </Routes>
     <Footer></Footer>
    </div>
  )
}
export default App;
