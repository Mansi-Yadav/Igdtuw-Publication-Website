import React, {useState} from 'react'
import './Header.css';
// import igdtuw from './Components/Home/igdtuw.jpg';
import igdtuwlogo from './Images/igdtuwlogo.jpg';
import logo3 from './Images/logo3.jpg';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {IoMdCall, IoLogoLinkedin, IoLogoFacebook, IoLogoTwitter, IoLogoYoutube} from 'react-icons/io';
import {FaMapMarker} from 'react-icons/fa';


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className='headerfile'>
      <div className='top'>
        <img className='logo' src={igdtuwlogo} alt='my image' />
        <div className='cllgname'>
          <h1 className='heading1'>INDIRA GANDHI DELHI TECNICAL UNIVERSITY FOR WOMEN</h1>
          <h3 className='heading2'>(Established by Govt. of Delhi vide Act 9 of 2012)</h3>
          <h3 className='heading3'>ISO 9001:2015 Certified University</h3>
        </div>
        <img className='logo3' src={logo3} alt='my image' />
      </div>
      {/* <div className='header'> */}
        <nav className='nav'>
          <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
          </div>
          <ul className={`navbar ${isMenuOpen ? 'open' : ''}`}>
            <li className='list'>
              <NavLink to='/' className='dropbtn'>
                Home
              </NavLink>
            </li>
            <div className='dropdown'>
              <li className='list'>
                <NavLink className='dropbtn'>About Us</NavLink>
              </li>
              <div className='dropdown-content'>
                <NavLink to='/institute'>Institute's History</NavLink>
                <NavLink to='/vision'>Vision/Mission</NavLink>
                <NavLink to='/vcmam'>Vice Chancellor</NavLink>
                <NavLink to='/registrar'>Registrar</NavLink>
                <NavLink to='/admin'>Administration</NavLink>
              </div>
            </div>
            <div className='dropdown'>
              <li className='list'>
                <NavLink className='dropbtn'>Department</NavLink>
              </li>
              <div className='dropdown-content'>
                <NavLink to='/dept1'>Applied Sciences & Humanities</NavLink>
                <NavLink to='/dept2'>Computer Science & Engineering</NavLink>
                <NavLink to='/dept3'>Electronics & Communication Engineering</NavLink>
                <NavLink to='/dept4'>Information Technology</NavLink>
                <NavLink to='/dept5'>Architecture and Planning</NavLink>
                <NavLink to='/dept6'>Mechanical & Automation Engineering</NavLink>
                <NavLink to='/dept7'>Management Department</NavLink>
                <NavLink to='/dept8'>Artificial Intelligence and Data Sciences</NavLink>
              </div>
            </div>
            <li className='list'>
              <NavLink to='/Research' className='dropbtn'>
                Research
              </NavLink>
            </li>
            <li className='list'>
              <NavLink to='/partnership' className='dropbtn'>
                Partnership
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    // </div>
  
  )
}
