import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import './components1/Register/register.css'

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const divStyle = {
        color: 'blue',
        fontSize: '45px',
        fontWeight: 'bold',
        
      };

    const handleRegisterClick = () => {
        navigate('/register');
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        const userData = JSON.parse(localStorage.getItem("user"));
        console.log(userData);

        if (userData && email === userData.Email && password === userData.password) {
            console.log("Login successful:", email);
            alert("Login successful!");

            navigate('/');
        } else {
            alert("Invalid credentials");
            console.log("Invalid credentials");
        }
    };

    return (
        <>
            {/* <Navbar /> */}
            <div className="border w-25 mt-5 m-auto p-3">
                <h4 className="text-secondary text-center"><span style={divStyle}>Hungry Hub</span> Login Page</h4>
                <div className="mt-3">
                    <label>Email:</label>
                    <input
                        type='email'
                        className="form-control"
                        placeholder='Enter your email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mt-3">
                    <label>Password:</label>
                    <input
                        type='password'
                        className="form-control"
                        placeholder='Enter your password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    
                </div>
                <div>
                    <button className="btn btn-primary w-100 mt-3" onClick={handleLoginSubmit}>Login</button>
                </div>
                <p className="text-center mt-2">or</p>
                <div>
                    <button className="btn btn-secondary w-100" onClick={handleRegisterClick}>New User Registration</button>
                </div>
            </div>
            
        </>
    );
};

export default Login;