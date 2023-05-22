import React from 'react'
import './Dept8.css';
import igdtuwlogo from './Images/igdtuwlogo.jpg';
import logo3 from './Images/logo3.jpg';
import { NavLink } from 'react-router-dom';
import {IoMdCall, IoLogoLinkedin, IoLogoFacebook, IoLogoTwitter, IoLogoYoutube} from 'react-icons/io';
import {FaMapMarker} from 'react-icons/fa';
import Header from '../../Header';

const Dept8 = () => {
  return (
    <div className='dept8'>
           {/* Header */}
            <Header/>
        {/* Main Content */}
        <div className='dept8-main'>
        <h3 className='dept8-heading'>DEPARTMENT OF ARTIFICIAL INTELLIGENCE AND DATA SCIENCES</h3>
        <p>
        Artificial Intelligence (AI) is transforming business, industry, government, social interaction and research. The growth of AI and data sciences as a discipline has been rapid in the last decade. Newly established in 2020, the Department of Artificial Intelligence and Data Science (AI&DS) aims to focus on a four-tiered strategy of Education, Research, Development and Innovation (ERDI Strategy) in the field of AI, Machine Learning, Deep Learning and Data Sciences.

        Currently department is running a 4 years UG program B.Tech – CSE(AI) and a 2 years PG program M.Tech - AI&DS which are specially designed to enable students to build intelligent machines, software, or applications with a cutting-edge combination of machine learning, analytics and visualization technologies. This course aims at providing not only the core computing subjects such as Data Structure, DBMS, Networking, Algorithms etc but also gives intensive inputs in areas of artificial intelligence, machine learning, deep learning and big data analytics along with strong application domains such as NLP, Computer Vision, Robotics and others.
        </p>
        </div>
        {/* Footer */}
      <footer className='foot'>
        <div className='footer'>
            

            <div className='links'>
                <h4>QUICK LINKS</h4>
                <br/>
                <div className='qlinks'>
                <a href="https://dst.gov.in/"target="_blank" rel="noreferrer">Department of Science and Technology</a>
                <a href="https://dhr.gov.in/" target="_blank" rel="noreferrer">Department of Health Research</a>
                <a href="https://www.ieee.org/" target="_blank" rel="noreferrer">IEEE</a>
                <a href="https://link.springer.com/search?facet-discipline=%22Computer+Science%22" target="_blank" rel="noreferrer">Springer</a>
                </div>
            </div>
            <div className='joinus'>
                <h4>Join Us</h4>
                <br />
                <div className='medialinks'>
                <a href="https://www.facebook.com/igdtuw.delhi.5"target="_blank" rel="noreferrer" className="logos"><IoLogoFacebook/></a>
                <a href="https://mobile.twitter.com/igdtuw_delhi" target="_blank" rel="noreferrer" className="logos">< IoLogoTwitter/> </a>
                <a href="https://www.linkedin.com/school/indira-gandhi-delhi-technical-university-for-women-new-delhi/" target="_blank"rel="noreferrer" className="logos"><IoLogoLinkedin/></a>
                <a href="https://www.youtube.com/channel/UCKmYhevZ59gJJP0ZbpReBKA" target="_blank" rel="noreferrer"className="logos"><IoLogoYoutube/></a>
                </div>
            </div>
            <div className='footer1'>
                <h4>Contact Us:</h4>
                <br />
                <div>
                    <div>"Indira Gandhi Delhi Technical University for Women"</div>
                    <i className='address'>
                    <FaMapMarker/>  Madrasa Road
                    <br /> Opposite St. James Church
                    <br /> Kashmere Gate
                    <br /> Delhi-110006
                    <br />
                    <br />  <IoMdCall/> Telephone: 011- 23900261, 23900264 </i>
                    
                </div>
  
            </div>
                     
        </div>
        <div className='footer2'>
                <span>© 2023 Copyright:Indira Gandhi Delhi Technichal University for Women. All Rights Reserved.
                <a href='https://www.igdtuw.ac.in/' target="_blank" rel="noreferrer" >IGDTUW</a>
                <br /> Best Viewed in 1064 x 705 Resolution</span>
                
            </div>   
            </footer>    </div>
  )
}

export default Dept8
