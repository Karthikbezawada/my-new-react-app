import React from 'react';
import Navbar from './components1/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Foot from './components1/Navbar/Footer';
import Home from './components1/Home/home.jsx';
import Login from './components1/Register/Login.js';
import Register from './components1/Register/Register.js';
import MyProfile from './components1/Register/Myprofile.js';
import Biriyani from './components1/Home/Biriyani.js';
import Northindian from './components1/Home/Northindian.js';
import Chines from './components1/Home/Chines.js';
import Southindian from './components1/Home/Southindian.js';
import Order from './components1/Home/Order.js';
import Myaddress from './components1/Home/Myaddress.js';




const App = () => {
  return (
    <>
        <Router>
          
                {/* <Navbar /> */}
                <Routes>
                    <Route path="/" element={<Home/>} />
                    {/* <Route path="/about" element={<About/>} /> */}
                    {/* <Route path='/service' element={<div>404 NOT FOUND</div>}/> */}
                    <Route path='/login'  element={<Login/>}/>
                    <Route path='/register' element={<Register/>} />
                    <Route path='/myprofile' element={<MyProfile/>}/>
                    <Route path='/biriyani' element={<Biriyani/>}/>
                    <Route path='/northindian' element={<Northindian/>}/>
                    <Route path='/chines' element={<Chines/>}/>
                    <Route path='/southindia' element={<Southindian/>}/>
                    <Route path='/order' element={<Order/>}/>
                    <Route path='/myaddress' element={<Myaddress/>}/>
                    
                    
                </Routes>
          
        </Router>
        </>
  );
};

export default App;
