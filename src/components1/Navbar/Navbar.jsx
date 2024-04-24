
import React, { useState } from 'react';
import './Navbra.css';

import { useNavigate } from "react-router-dom";
import { IoRestaurant } from "react-icons/io5";
// import './src/components1/Navbar/Navbra.css'
import { FaCrown } from "react-icons/fa6";
function Navbar() {
  // const [search, setSearch] = useState('');
  const divStyle = {
    color: '#FFD700',
    size: '25px',
    
    // fontWeight: 'bold',
    
  };
  const userData = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const home = () => {
    navigate('/');
  };

  const handleLoginClick = () => {
    navigate('/register');
  };

  const handleClick = () => {
    navigate('/login');
  };

  const myProfile = () => {
    navigate('/myprofile');
  };
  const myaddress = () => {
    navigate('/myaddress');
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ height: "80px" }}>
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" onClick={home} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <IoRestaurant className='logo-icon logoo' />
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" onClick={myProfile} href="#">{userData ? userData.name : 'My Profile'}</a></li>
                <li><a className="dropdown-item" onClick={myaddress} href="#">Address</a></li>

                <li><a className="dropdown-item" onClick={handleLoginClick} href="#">New User</a></li>
                <li><a className="dropdown-item" onClick={handleClick} href="#">Log Out</a></li>
                <li><a className="dropdown-item" href="#">Hungry Hub Gold<FaCrown  style={divStyle}/></a></li>

              </ul>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              // value={search}
              // onChange={(e) => setSearch(e.target.value)}
              placeholder="Search"
              aria-label="Search"
            />
            {/* {Data.filter(data => data.h.toLowerCase().includes(search.toLowerCase())).map(data => ( */}
  {/* <div key={data.id}>  */}
    {/* {data.h} */}
  {/* </div> */}
{/* ))} */}

            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
