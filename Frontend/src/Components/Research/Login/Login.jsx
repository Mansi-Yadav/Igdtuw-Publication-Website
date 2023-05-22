import React, { useState } from 'react';
// import axios from 'axios';
import igdtuwlogo from './Images/igdtuwlogo.jpg';
import logo3 from './Images/logo3.jpg';
import './Login.css';
import { NavLink } from 'react-router-dom';
import UserDetails from './UserDetails';
//import {IoHomeOutline} from 'react-icons/io';
import { AiTwotoneHome } from "react-icons/ai";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  function handleSubmit(e) {
    e.preventDefault();

    console.log(email, password);
    fetch("https://ruby-wombat-wig.cyclic.app/login-user", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status == "ok") {
          alert("Login successful");
          window.localStorage.setItem("token", data.data);
          window.localStorage.setItem("loggedIn", true);
          window.location.href = "./UserDetails";
        } else {
          alert(data.error);
        }
      });
  }

  return (
    <div className='loginPage'>
      <div className='login-top'>
        <img className='login-logo' src={igdtuwlogo} alt="my image"></img>
        <h1 className='login-heading1'>INDIRA GANDHI DELHI TECHNICAL UNIVERSITY FOR WOMEN</h1>
        <img className='login-logo3' src={logo3} alt="my image"></img>
      </div>
      <h3 className='login-heading2'>(Established by Govt. of Delhi vide Act 9 of 2012)</h3>
      <h3 className='login-heading3'>ISO 9001:2015 Certified University</h3>

      <div className="login-page">
        <div className="login-main-box">
          <form onSubmit={handleSubmit}>
            <NavLink to='/' className='home-icon'><AiTwotoneHome /></NavLink>
            <h3 className='login-box'>Log In</h3>

            <div className="login-form-detail">
              <label></label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="login-form-detail">
              <label></label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* <div className="login-form-detail">
              <div className="custom-control-custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                  Remember me
                </label>
              </div>
            </div> */}

            <div className="d-grid">
              {/* function add */}
              <button type="submit" className="btn-btn-primary">
                Submit

              </button>
            </div>
            <p className="forgot-password-text-right">
              <NavLink className="abc" to='/signup'>Sign Up</NavLink>
            </p>
          </form>
        </div>
      </div>

    </div>
  );
}

{/* // export default Login */ }
