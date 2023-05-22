import React, { Component, useEffect, useState } from 'react';
import './Research.css';
import { NavLink } from 'react-router-dom';
import igdtuwlogo from './Images/igdtuwlogo.jpg';
import logo3 from './Images/logo3.jpg';
import { IoMdCall, IoLogoLinkedin, IoLogoFacebook, IoLogoTwitter, IoLogoYoutube } from 'react-icons/io';
import { FaMapMarker } from 'react-icons/fa';
import SearchBar from './SearchBar';
import { AiTwotoneHome } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";

export default function Research() {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const [researchData, setresearchData] = useState([]);

  const getAllData = async () => {
    try {
      const getPaper = await fetch(
        `https://ruby-wombat-wig.cyclic.app/viewAllPaper`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const res = await getPaper.json();
      setresearchData(res?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = async (event) => {

    try {
      let key = event.target.value;
      if (key) {
        const result = await fetch(
          `https://ruby-wombat-wig.cyclic.app/search/${key}`);
        //   {
        //     method: "GET",
        //     headers: {
        //       "Content-Type": "application/json",
        //     },
        //   }
        // );
        const resultJson = await result.json();
        if (resultJson) {
          setresearchData(resultJson);
        }
      }
      else {
        getAllData();
      }

    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    getAllData();
  }, []);
  console.log(researchData);
  return (
    <div className='research'>
      {/* Header */}
      <div>
        <div className='top'>
          <img className='logo' src={igdtuwlogo} alt="my image"></img>
          <div className='cllgname'>
            <h1 className='heading1'>INDIRA GANDHI DELHI TECNICAL UNIVERSITY FOR WOMEN</h1>
            <h3 className='heading2'>(Established by Govt. of Delhi vide Act 9 of 2012)</h3>
            <h3 className='heading3'>ISO 9001:2015 Certified University</h3>
          </div>

          <img className='logo3' src={logo3} alt="my image"></img>
        </div>
      </div>
      {/* <div className='header'> */}

        <nav className='nav'>
        <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
          </div>
          <ul className={`navbar ${isMenuOpen ? 'open' : ''}`}>
            <li className='list'><NavLink to="/" className='dropbtn'>Home</NavLink></li>
            <div className='dropdown'>
              <li className='list'><NavLink className='dropbtn'>About Us</NavLink></li>
              <div className='dropdown-content'>
                <NavLink to="/institute"> Institute's History </NavLink>
                <NavLink to="/vision"> Vision/Mission </NavLink>
                <NavLink to="/vcmam"> Vice Chancellor</NavLink>
                <NavLink to="/registrar"> Registrar</NavLink>
                <NavLink to="/admin"> Administration</NavLink>
              </div>
            </div>
            <div className='dropdown'>
              <li className='list'><NavLink className='dropbtn'>Department</NavLink></li>
              <div className='dropdown-content'>
                <NavLink to="/dept1"> Applied Sciences & Humanities</NavLink>
                <NavLink to="/dept2"> Computer Science & Engineering </NavLink>
                <NavLink to="/dept3"> Electronics & Communication Engineering</NavLink>
                <NavLink to="/dept4"> Information Technology</NavLink>
                <NavLink to="/dept5"> Architecture and Planning</NavLink>
                <NavLink to="/dept6"> Mechanical & Automation Engineering</NavLink>
                <NavLink to="/dept7"> Management Department</NavLink>
                <NavLink to="/dept8"> Artificial Intelligence and Data Sciences </NavLink>
              </div>
            </div>
            <li className='list'><NavLink to="/research" className='dropbtn'>Research</NavLink></li>
            <li className='list'><NavLink to="/partnership" className='dropbtn'>Partnership</NavLink></li>
            <li className='list'><NavLink to="/login">Login/Signup</NavLink></li>
          </ul>
        </nav>
      {/* </div>         */}
      {/* Main Content */}
      {/* Search bar + Top conributors */}
      {/* <SearchBar/> */}

      {/* <SearchBar onchange={handleSearch} /> */}
      <div className="searchbar-input-wrapper">
        <FaSearch id="search-icon" />
        <input type="text"
          placeholder="Search"
          onChange={handleSearch} />
        {/* <ul>
        {input?.data.map((result)=>(
          <li>{result.paperName}</li>
        ))}
      </ul> */}

      </div>
      <table className='research-paper'>
        <thead>
          <tr>
          <th className='faculty-name'>Name of Faculty</th>
            <th className='faculty-name'>Name of Paper</th>
            <th className='faculty-name'>Link of Paper</th>
            <th className='faculty-name'>Year of Publication</th>
          </tr>
        </thead>
        <tbody >
          {researchData.map((paper) => (
            <tr>
              <td >
                <div >
                  {paper.username}
                </div>
              </td>
              <td >
                <div >
                  {paper.paperName}
                </div>
                {/* <div className="text-sm text-gray-500 dark:text-gray-300">
                                {paper.email}
                              </div> */}

              </td>
              <td className="pprLink">
                <div className="text-sm text-gray-900 dark:text-white">
                  <a href={paper.paperLink} target="_blank">{paper.paperLink}</a>
                </div>

              </td>

              <td >
                <div >
                  {paper.yearOfPublication}
                </div>

              </td>
            </tr>
          ))}
        </tbody>
        {/* Add Paper Details Here */}
      </table>
    </div>
  )
};


