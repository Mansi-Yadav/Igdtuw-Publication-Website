import React from 'react'
import './Vision.css';
import igdtuwlogo from './Images/igdtuwlogo.jpg'
import logo3 from './Images/igdtuw.jpg'
import igdtuw from './Images/igdtuw.jpg'
import { NavLink } from 'react-router-dom';
import {IoMdCall, IoLogoLinkedin, IoLogoFacebook, IoLogoTwitter, IoLogoYoutube} from 'react-icons/io';
import {FaMapMarker, FaRegHandPointRight} from 'react-icons/fa';
import Header from '../../Header';

const Vision = () => {
  return (
    <div className='vision'>
       {/* Navbar */}
       <Header/>
        {/* Main Content */}
        <div className='vision-main'>
        <div>
        <h3 className='vision-heading'> VISION</h3>
        <div className='vision-para'> <FaRegHandPointRight/> To make India a Knowledge Society and Knowledge Economy by empowering the women of our country through education in Engineering, Science, Management and Technology and To become one of the top technical Universities in the country known for its value based, quality technical education supported with industry relevant research, with focus on environmental and social issues.</div>
        </div>
        <div>
        <h3 className='vision-heading'> MISSION</h3>
        <div className='vision-para'>
            <ul>
                <li> <FaRegHandPointRight/> To foster an environment for excellence in professional education and ensure active participation of women in the field of Engineering, Science, Management and Technology, while striking out a work-life balance.</li>
                <li> <FaRegHandPointRight/> To start new professional courses for women in sun-rise disciplines and forge alliances with industry to impart industry relevant education.</li>
                <li> <FaRegHandPointRight/> To emancipate women through pursuit of knowledge enabling them to gain equal status in society through realization of their rights and responsibilities</li>
                <li> <FaRegHandPointRight/> To develop sustainable systems and state-of-the-art infrastructure to enable the Indian women to become the future leaders, managers, researchers and productive team players in the field of science, technology and management.</li>
            </ul>
        </div>
        </div>
        <div>
        <h3 className='vision-heading'> OBJECTIVE</h3>

        <div className='vision-para'>
        As per IGDTUW Act 2012 vide clause 6 the objectives of the University shall be:-
        <ul>
                <li><FaRegHandPointRight/> To evolve and impart comprehensive professional education with focus on but not restricted to Engineering, Technology, Sciences, Management and such areas as deemed fit;</li>
                <li><FaRegHandPointRight/> To facilitate and promote studies leading to award of degrees, diplomas and certificates;</li>
                <li><FaRegHandPointRight/> To achieve excellence in Engineering, Technology, Sciences, Management and allied areas and matters connected therewith or incidental thereto;</li>
                <li><FaRegHandPointRight/> To establish Centres of Advanced Studies, Research and innovation in various relevant areas of Sciences, Engineering, Technology, Management and allied areas;</li>
                <li><FaRegHandPointRight/> To promote development of products, services and entrepreneurship;</li>
                <li><FaRegHandPointRight/> To be industry relevant and to create an impact on the academic community in India and abroad;</li>
                <li><FaRegHandPointRight/> To establish linkages between the University, Industries, Research and Development Organizations and other Universities/Institutes for collaborative (including dual degree) teaching and research programmes in India and abroad;</li>
                <li><FaRegHandPointRight/> To promote global interaction through faculty and student exchange in the areas of Science, Engineering, Technology, Management and other allied areas as deemed fit;</li>
                <li><FaRegHandPointRight/> To set up innovation centres, knowledge Park and Technology incubators to foster Techno-entrepreneurship, innovation and new product development;</li>
                <li><FaRegHandPointRight/> To disseminate knowledge and contribute towards nation building and faculty development by organizing expert lectures, seminars, symposia, workshops , conferences, summer and winter schools, short term training programs and refresher courses from time to time;</li>
                <li><FaRegHandPointRight/> To promote and foster cultural and ethical values with a view to promote and foster professional morality, research integrity, globally acceptable business ethics and morals for professionals;</li>
                <li><FaRegHandPointRight/> To publish periodicals, treatises, studies, books, reports, journals and other literatures on subjects pertinent to academic areas of the university, including electronics resources.</li>
            </ul>
        </div>
        </div>
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
            </footer>
    </div>
  )
}

export default Vision
