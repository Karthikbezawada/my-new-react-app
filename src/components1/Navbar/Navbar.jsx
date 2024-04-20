import React from 'react';
import './Navbra.css';
import { FaSearch } from "react-icons/fa";
import imglogo_black from './png-transparent-food-icon-delivery-icon-sushi-pizza-delivery-scooter-courier-food-delivery-text-thumbnail-removebg-preview.png';
import { IoRestaurant } from "react-icons/io5";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{height: "80px"}}>
      <div className="container-fluid">
        {/* <a className="navbar-brand" href="#"><IoRestaurant className='logoo' /></a> */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            
             

             
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <IoRestaurant className='logoo' />
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">My Profile</a></li>
                <li><a className="dropdown-item" href="#">Home</a></li>
                <li><a className="dropdown-item" href="#">New User</a></li>
                <li><a className="dropdown-item" href="#">Log Out</a></li>
                
              </ul>
            </li>
            


          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;