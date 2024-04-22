import React from 'react';
import Navbar from './components1/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Foot from './components1/Navbar/Footer';
import Home from './components1/Home/home.jsx';
import Login from './components1/Register/Login.js';
import Register from './components1/Register/Register.js';
import MyProfile from './components1/Register/Myprofile.js';


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
                    {/* <Route path="/donateus" element={<Contact/>}/> */}
                    <Route path='/register' element={<Register/>} />
                    {/* <Route path='/home' element={<Ho/>} />
                    <Route path='/newlaunch' element={<NL/>} />
                    <Route path='/products' element={<Products/>}/>
                    <Route path='/contactus' element={<ContactUs/>}/>
                    <Route path='/service' element={<Serv/>}/> */}
                    <Route path='/myprofile' element={<MyProfile/>}/>
                    
                    
                    
                </Routes>
          
        </Router>
        </>
  );
};

export default App;
