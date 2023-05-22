import React, { useState }  from 'react';
// import axios from 'axios';
import igdtuwlogo from './Images/igdtuwlogo.jpg';
import logo3 from './Images/logo3.jpg';
import './Signup.css';
import { NavLink } from 'react-router-dom';
import Login from '../Login/Login';
import { AiTwotoneHome } from "react-icons/ai";

// const Signup= () => {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [password2, setPassword2] = useState('');
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(`Username: ${username}, Email: ${email} Password: ${password}, password2: ${password2}`);
//     fetch('http://localhost:8080/register', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//           username: username,
//           email: email,
//           password: password,
//           password2: password2
//       })
//     })
//     .then(response => response.json())
//     .then(json => {
//       console.log(json);
//       // Handle successful response
//     })
//     .catch(error => {
//       console.log(error);
//       // Handle error response
//     });
//   };
//   return (
//      <div className='signupPage'>
//       <div className='top'>
//         <img className='logo' src={igdtuwlogo} alt="my image"></img>
//       <h1 className='heading1'>INDIRA GANDHI DELHI TECNICAL UNIVERSITY FOR WOMEN</h1>
//       <img className='logo3' src={logo3} alt="my image"></img>
//       </div>
//       <h3 className='heading2'>(Established by Govt. of Delhi vide Act 9 of 2012)</h3>
//       <h3 className='heading3'>ISO 9001:2015 Certified University</h3>
        
//       <div className="signup-main">
//         <div className='login-signup'>
//         <div className='loginheading'>
//         <NavLink className={"abc"} to='/login'>Login</NavLink>
//         </div>
//         <div className='signupheading'>
//         <NavLink className={"abc"} to='/signup'>Sign Up</NavLink>
//         </div>
//         </div>
//         <form onSubmit={handleSubmit}>
//         <div className="input-container">
//           <div className='username'>
//           <label>Username </label>
//           <input type="text" name="uname" required onChange={(e) => setUsername(e.target.value)} />
//           {/* {renderErrorMessage("uname")} */}
//           </div>
//           <div className='email'>
//           <label>Email </label>
//           <input type="text" name="uname" required onChange={(e) => setEmail(e.target.value)} />  
//           </div>
//           <div className='password'>    
//           <label>Password </label>
//           <input type="password" name="pass" required onChange={(e) => setPassword(e.target.value)} />
//           {/* {renderErrorMessage("pass")} */}
//           </div> 
//           <div className='password'>
//           <label> Confirm Password </label>
//           <input type="password" name="pass" required onChange={(e) => setPassword2(e.target.value)} />
//           {/* {renderErrorMessage("pass")} */}
//           </div>
//         <button type="submit" className="signupBut">
//           <p>Sign Up</p>
//         </button>
//         </div>
//         </form>
//       </div>
//       </div> 
    
//   )
// }

// export default Signup


export default function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
 
  // const [userType, setUserType] = useState("");
  // const [secretKey, setSecretKey] = useState("");

  const handleSubmit = (e) => {
      e.preventDefault();

      console.log("username:",username,"email:", email,"password:",password,"confirmPassoword:" ,password2);
      fetch("https://ruby-wombat-wig.cyclic.app/register", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
            Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          username,
          email,
          password,
          password2,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("hi",data);
          console.log(data, "userRegister");
          if(data.message== "001"){
            alert("Password not matching");
          }
           if (data.status === 200) {
             alert("User registered succesfully!");
             window.location.href = "./Login";
          } 
          else {
            alert("Ooops! Something went wrong :(");
          }
        });
    };

  return (

    <div className='signupPage'>
    <div className='top'>
      <img className='logo' src={igdtuwlogo} alt="my image"></img>
    <h1 className='heading1'>INDIRA GANDHI DELHI TECHNICAL UNIVERSITY FOR WOMEN</h1>
    <img className='logo3' src={logo3} alt="my image"></img>
    </div>
    <h3 className='heading2'>(Established by Govt. of Delhi vide Act 9 of 2012)</h3>
    <h3 className='heading3'>ISO 9001:2015 Certified University</h3>


    <div className="signup-page">
      <div className="signup-main-box">
        <form onSubmit={handleSubmit}>
        <NavLink to='/' className='home-icon'><AiTwotoneHome/></NavLink>
          <h3 className='signup-box'>Sign Up</h3>
          {/* <div>
            Register As
            <input
              type="radio"
              name="UserType"
              value="User"
              // onChange={(e) => setUserType(e.target.value)}
            />
            User
          </div> */}
          {/* {userType == "Admin" ? (
            <div className="mb-3">
              <label>Secret Key</label>
              <input
                type="text"
                className="form-control"
                placeholder="Secret Key"
                onChange={(e) => setSecretKey(e.target.value)}
              />
            </div>
          ) : null} */}

          <div className="signup-form-details">
            <label></label>
            <input
              type="text"
              className="form-control"
              placeholder="User-name"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          {/* <div className="mb-3">
            <label>Last name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              onChange={(e) => setLname(e.target.value)}
            />
          </div> */}

          <div className="signup-form-details">
            <label></label>
            <input
              type="email"
              className="form-control-signup"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="signup-form-details">
            <label></label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="signup-form-details">
            <label></label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => setPassword2(e.target.value)}
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="signup-button">
              Sign Up
            </button>
          </div>
          <p className="signin">
            Already registered </p>
            <NavLink className="abc-signin" to='/login'>sign in?</NavLink>
          
        </form>
      </div>
    </div>
    </div>
  );
}