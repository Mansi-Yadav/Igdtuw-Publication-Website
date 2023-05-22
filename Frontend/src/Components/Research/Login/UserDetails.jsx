import React, { Component, useEffect, useState, setState }  from 'react';
// import axios from 'axios';
import igdtuwlogo from './Images/igdtuwlogo.jpg';
import logo3 from './Images/logo3.jpg';
import './UserDetails.css';
import { NavLink } from 'react-router-dom';
import Login from './Login';
 
export default function UserDetails() {
  const [userData, setUserData] = useState("");
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [papername, setPaperName] = useState('');
  const [researchArea, setResearchArea] = useState('');
  const [yearofpublication, setYearofpublication] = useState('');
  const [paperLink, setPaperLink] = useState('');
  
  function fetchEmail() {
    // e.preventDefault();
    fetch("https://ruby-wombat-wig.cyclic.app/userDetails", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("OOOOOOO");
        // console.log(data.data.email, "userData");
        
        //  setUserData(data.data);
        setUserData(data.data.email);
        if (data.data === "token expired") {
          alert("Token expired login again");
          window.localStorage.clear();
          window.location.href = "./Login";
       }
      });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("https://ruby-wombat-wig.cyclic.app/uploadPaper", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        username,  email, papername, yearofpublication,paperLink, researchArea
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data, "userRegister");
        if (data.status == 200) {
          alert("Paper uploaded !");
          window.location.href = "./Research";
        }else{
          alert("Not uploaded");
        }
      });
  }

  function logout(){
    window.localStorage.clear();
    window.location.href = "./Login";
  }

  fetchEmail();
  return (
    <div className='userDetails'>
    <div className='upload-top'>
      <img className='upload-logo' src={igdtuwlogo} alt="my image"></img>
    <h1 className='upload-heading1'>INDIRA GANDHI DELHI TECHNICAL UNIVERSITY FOR WOMEN</h1>
    <img className='upload-logo3' src={logo3} alt="my image"></img>
    </div>
    <h3 className='upload-heading2'>(Established by Govt. of Delhi vide Act 9 of 2012)</h3>
    <h3 className='upload-heading3'>ISO 9001:2015 Certified University</h3>
    
    <div className='id-upload'>
      {/* UserID */}
      <h3>{userData}</h3>
    </div>
    <button className='logout-button'
    onClick={logout}>Logout</button>
    
      <div className='upload-form-top'>
      <form onSubmit={handleSubmit}>
      <h1 className='upload-title'> Upload Your Publication Here </h1>
      <div className='upload-form'>
      <div className='form-detail'>
        <label></label>
        <input className='detail-enter' type="text" placeholder="Enter Name" onChange={(e) => setUsername(e.target.value)}/>
      </div>

    <div className='form-detail'>
      <label></label>
      <input className='detail-enter' type="email" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)}/>
    </div>

    <div className='form-detail'>
      <label></label>
      <input className='detail-enter' type="text" placeholder="Enter Paper Name" onChange={(e) => setPaperName(e.target.value)}/>
    </div>

    {/* <div className='form-detail'>
      <label></label>
      <input className='detail-enter' type="text" placeholder="Research Paper Area"  onChange={(e) => setResearchArea(e.target.value)}/>
    </div> */}

    <div className='form-detail'>
      <label></label>
      <input className='detail-enter' type="number" placeholder="Enter Year of Publication" onChange={(e) => setYearofpublication(e.target.value)}/>
    </div>

    <div className='form-detail'>
      <label></label>
      <input className='detail-enter' type="url" placeholder="Research Paper Link" onChange={(e) => setPaperLink(e.target.value)}/>
    </div>

    <div className='upload-button'>
      <button type='submit' className="btn-primary-upload">Upload</button>
    </div>
    </div>
    </form>
    </div>
    </div>
  );
  }

















// import React, { Component, useEffect, useState, setState }  from 'react';
// // import axios from 'axios';
// import igdtuwlogo from './Images/igdtuwlogo.jpg';
// import logo3 from './Images/logo3.jpg';
// import './UserDetails.css';
// import { NavLink } from 'react-router-dom';
// import Login from './Login';
 

//  export default class UserDetails extends Component {
//  // const [userData, setUserData] = useState("");
//  constructor(props){
//   super(props)
//   this.state = {
//     userData:"",
//  };
// }

 


//   // useEffect(() => 
//   componentDidMount(){
//     fetch("http://localhost:4000/userDetails", {
//       method: "POST",
//       crossDomain: true,
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//         "Access-Control-Allow-Origin": "*",
//       },
//       body: JSON.stringify({
//         token: window.localStorage.getItem("token"),
//       }),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data, "userData");
        
//          //setUserData(data.data);
//         this.setState({ userData: data.data});
//         if (data.data === "token expired") {
//           alert("Token expired login again");
//           window.localStorage.clear();
//           window.location.href = "./Login";
//        }
//       });
//   }
//   logout=()=>{
//   window.localStorage.clear();
//   window.location.href = "./Login";
//    }

//    //componentDidMount();




  
//   render(){
//   return (
//     <div className='userDetails'>
//     <div className='top'>
//       <img className='logo' src={igdtuwlogo} alt="my image"></img>
//     <h1 className='heading1'>INDIRA GANDHI DELHI TECHNICAL UNIVERSITY FOR WOMEN</h1>
//     <img className='logo3' src={logo3} alt="my image"></img>
//     </div>
//     <h3 className='heading2'>(Established by Govt. of Delhi vide Act 9 of 2012)</h3>
//     <h3 className='heading3'>ISO 9001:2015 Certified University</h3>
    
//     <div>
//       Email<h1>{this.state.userData.email}</h1>
//     </div>
//     <button onClick={this.logout}>Logout</button>
//     {/* header
//     home icon
//     logout(right side)
//     user name(right side) */}
    
//       {/*
//       Upload Page 
//       form
//       faculty name
//       faculty id
//       year of publication
//       ppr name
//       paper link
//       upload button
//       */}
//       <div className='upload-form'>
//       <form>
//       <h1> Upload Your Publication Here </h1>
//       <div className='faculty-name'>
//         <label>Faculty Name</label>
//         <input type="text" placeholder="Enter Name"/>
//       </div>

//     <div className='faculty-email'>
//       <label>Faculty Email</label>
//       <input type="email" placeholder="Enter Email"/>
//     </div>

//     <div className='research-paper-name'>
//       <label>Research Paper Name</label>
//       <input type="text" placeholder="Enter Paper Name"/>
//     </div>
//     <div className='research-paper-area'>
//       <label>Research Paper Area</label>
//       <input type="text" placeholder="Research Paper Area"/>
//     </div>

//     <div className='year'>
//       <label>Year of Publication</label>
//       <input type="number" placeholder="Enter Year of Publication"/>
//     </div>

//     <div className='research-paper-link'>
//       <label>Paper Link</label>
//       <input type="text" placeholder="Research Paper Link"/>
//     </div>

//     <div className='upload-button'>
//       <button type='submit' className="btn btn-primary">Upload</button>
//     </div>
//     </form>
//     </div>
//     </div>

//   );
// }
// }


// //admin ? <AdminHome /> : <UserHome userData={userData} />;