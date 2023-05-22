import React from 'react'
import './Partnership.css';
import { NavLink } from 'react-router-dom';
import igdtuwlogo from './Images/igdtuwlogo.jpg';
import logo3 from './Images/logo3.jpg';
import one1 from './Images/one1.png';
import one2 from './Images/one2.png';
import one3 from './Images/one3.png';
import one4 from './Images/one4.png';
import one5 from './Images/one5.png';
import one6 from './Images/one6.png';
import one7 from './Images/one7.png';
import one8 from './Images/one8.png';
import two1 from './Images/two1.png';
import two2 from './Images/two2.png';
import two3 from './Images/two3.png';
import two4 from './Images/two4.png';
import two5 from './Images/two5.png';
import two6 from './Images/two6.png';
import two7 from './Images/two7.png';
import two8 from './Images/two8.png';
import two9 from './Images/two9.png';
import two10 from './Images/two10.png';
import three1 from './Images/three1.png';
import three2 from './Images/three2.png';
import three3 from './Images/three3.png';
import three4 from './Images/three4.png';
import three5 from './Images/three5.png';
import three6 from './Images/three6.png';
import three7 from './Images/three7.png';
import three8 from './Images/three8.png';
import three9 from './Images/three9.png';
import three10 from './Images/three10.png';
import three11 from './Images/three11.png';
import three12 from './Images/three12.png';
import Marquee from 'react-fast-marquee';
import {IoMdCall, IoLogoLinkedin, IoLogoFacebook, IoLogoTwitter, IoLogoYoutube} from 'react-icons/io';
import {FaMapMarker} from 'react-icons/fa';
import Header from '../Header';

const Partnership = () =>  {
  return (
    <div className='partnership'>
      {/* Header */}
      <Header/>
        {/* Main Content */}
        
      
        <div className='partnership'>
          <h1>Partnership Page</h1>
          <h2>Goverment bodies/ Institutes/ Organizations</h2>
          <marquee behavior="scroll" direction="left">
          <div className='partnership-marquee'>
          <div className='partnership-container'> 
          <img className='partnership-logo' src={one1} alt="my image"></img>
          <img className='partnership-logo' src={one2} alt="my image"></img>
          <img className='partnership-logo' src={one3} alt="my image"></img>
          <img className='partnership-logo' src={one4} alt="my image"></img>
          <img className='partnership-logo' src={one5} alt="my image"></img>
          <img className='partnership-logo' src={one6} alt="my image"></img>
          <img className='partnership-logo' src={one7} alt="my image"></img>
          <img className='partnership-logo' src={one8} alt="my image"></img>
          </div>
          </div>
          </marquee>
        </div>
        
        
        <div className='partnership'>
          <h2>INTERNATIONAL MOU'S</h2>
          <marquee behavior="scroll" direction="left">
          <div className='partnership-marquee'>
          <div className='partnership-container'>
          <img className='partnership-logo' src={two1} alt="my image"></img>
          <img className='partnership-logo' src={two2} alt="my image"></img>
          <img className='partnership-logo' src={two3} alt="my image"></img>
          <img className='partnership-logo' src={two4} alt="my image"></img>
          <img className='partnership-logo' src={two5} alt="my image"></img>
          <img className='partnership-logo' src={two6} alt="my image"></img>
          <img className='partnership-logo' src={two7} alt="my image"></img>
          <img className='partnership-logo' src={two8} alt="my image"></img>
          {/* <img className='partnership-logo' src={two9} alt="my image"></img> 
          <img className='partnership-logo' src={two10} alt="my image"></img> */}
          
          </div>
          </div>
          </marquee>
        </div>
        
        
        <div className='partnership'>
          <h2>INDUSTRIAL ORGANIZATIONS</h2>
          <marquee behavior="scroll" direction="left">
          <div className='partnership-marquee'>
          <div className='partnership-container'>
          <img className='partnership-logo' src={three1} alt="my image"></img>
          <img className='partnership-logo' src={three2} alt="my image"></img>
          <img className='partnership-logo' src={three3} alt="my image"></img>
          <img className='partnership-logo' src={three4} alt="my image"></img>
          <img className='partnership-logo' src={three5} alt="my image"></img>
          <img className='partnership-logo' src={three6} alt="my image"></img>
          <img className='partnership-logo' src={three7} alt="my image"></img>
          <img className='partnership-logo' src={three8} alt="my image"></img>
          {/* <img className='partnership-logo' src={three9} alt="my image"></img> 
          <img className='partnership-logo' src={three10} alt="my image"></img> 
          <img className='partnership-logo' src={three11} alt="my image"></img> 
          <img className='partnership-logo' src={three12} alt="my image"></img> */}
          
          </div>
          </div>
          </marquee>
        </div>
        
    </div>

    
  )
}
export default Partnership
