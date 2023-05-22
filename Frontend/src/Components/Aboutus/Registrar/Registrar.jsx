import React from 'react'
import './Registrar.css';
import igdtuwlogo from './Images/igdtuwlogo.jpg';
import logo3 from './Images/logo3.jpg';
import { NavLink } from 'react-router-dom';
import registrarsir from './Images/registrarsir.jpg';
import {IoMdCall, IoLogoLinkedin, IoLogoFacebook, IoLogoTwitter, IoLogoYoutube} from 'react-icons/io';
import {FaMapMarker} from 'react-icons/fa';
import Header from '../../Header';

const Registrar = () => {
  return (
    <div className='registrar'>
     {/* Header */}
      <Header/>
        {/* Main Content */}
        <div className='registrar-main'>
        <h3 className='registrar-heading'>REGISTRAR</h3>
        <h4>“The roots of education are bitter, but the fruit is sweet.”
          -- Aristotle</h4>
          <div className='registrar-para'>
            <img className='registrar-img' src={registrarsir} alt="my image"></img>
            It feels great to be part of one of the Top Ranking Emerging Engineering Institutes of Technology in India and it is an honor to hold post of Registrar of Indira Gandhi Delhi Technical University for Women, Delhi.


            In a very short span of time, IGDTUW has become one of the most desired University among Female students in India. The industry has high respect for IGDTUW and there are a number of sponsored research projects from the leading Industry/organizations like Microsoft, Nokia, Department of Science & Technology, Ministry of Electronics & IT, DKDF and many more. This has developed an environment of Research & Development in the University in true sense.

            
            As a student, there are times when you feel exhausted and getting a degree can indeed be challenging, but if you put in the work with dedication and you are in a University like IGDTUW, you will pass the exams, get a good grade, and, most importantly, be proud of yourself.

            
            The University is located in a heritage building and is very well maintained with one of the best equipment, software and trainers in latest technologies. University provides a very conducive environment for teachers and students to carry out their studies and research work. At IGDTUW you will feel a very positive and a healthy environment to become who you always dreamed of becoming, making all the hard work worth it. You will get the job you always wanted, and you will be prepared and able to apply everything you have been taught.


            I, with my committed and dedicated administrative officers/staff assure to provide all possible administrative support to all the young and budding Engineering, Management and Architecture students of the university.

            I wish all students of IGDTUW the very best in all their future endeavors and welcome you all to the first women technical university of India i.e. IGDTUW.

          </div>
          <h4 className='registrar-name'>Prof. Manoj Soni
          Registrar, IGDTUW</h4>
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

export default Registrar
