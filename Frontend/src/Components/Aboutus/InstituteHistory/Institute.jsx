import React from 'react'
import './Institute.css';
import igdtuwlogo from './Images/igdtuwlogo.jpg';
import logo3 from './Images/logo3.jpg';
import igdtuw from './Images/igdtuw.jpg';
import { NavLink } from 'react-router-dom';
import {IoMdCall, IoLogoLinkedin, IoLogoFacebook, IoLogoTwitter, IoLogoYoutube} from 'react-icons/io';
import {FaMapMarker} from 'react-icons/fa';
import Header from '../../Header';

const Institute = () => {
  return (
    <div className='institute'>
        {/* Navbar */}
         <Header/>
        {/* Main Content */}
        {/* Add igdtuw photo here */}
        <div className='institue-main'>
      <h3 className='institue-heading'> INSTITUTE'S HISTORY</h3>
      <div className='institue-para'>
      <img className='institue-img' src={igdtuw} alt="my image"></img>
      Indira Gandhi Delhi Technical University for Women (IGDTUW) was established by the Govt. NCT of Delhi in May, 2013 vide Delhi Act 09 of 2012, as a non-affiliating University to facilitate and promote studies, research, technology, innovation, incubation and extension work in emerging areas of professional education among women, with focus on engineering, technology, applied sciences, architecture and its allied areas with the objective to achieve excellence in these and related fields.
      Erstwhile Indira Gandhi Institute of Technology (IGIT) was established in 1998 by Directorate of Training and Technical Education, Govt. of NCT of Delhi as the first engineering college for women only. In 2002, the college became the first constituent college of Guru Gobind Singh Indraprastha University. Over the years erstwhile IGIT has significantly contributed to the growth of quality technical education in the country and has become not only one of the premier institutions of Delhi but as the most prestigious college of north India.
      
      Since 2013, the University has steadily grown exponentially. It has continued B.Tech. programmes in four disciplines namely computer science engineering, information technology, electronics & communications and robotics & automation engineering. M.Tech. Programmes in niche areas of technology like Information Security Management, Mobile Pervasive Computing, VLSI Design and Robotics and Automation Engineering were started for the first time in institute. The Ph.D programme was started in 2014 in various disciplines. In 2015, the University started B.Arch. Programme. In short span of few years, the University has drastically increased its student strength.

      The University is not only providing high-quality teaching in an environment of competitive research but is also committed towards the creation of new knowledge through research, development and innovation. At present the various departments of the University are running sponsored research projects from the leading Industry/organizations like Microsoft, Atmel, Nokia, Department of Science & Technology, Department of IT, Govt. of India and IITs to name a few. With the support of the Govt. of NCT of Delhi, the University has started its incubation centre – Anveshan that is offering ample opportunities to the young women engineers to realize their dreams by becoming the entrepreneur.

      The teaching pedagogy of the University is to make students think, to resolve problems by argument supported by evidence and not to be dismayed by complexity, but bold in unravelling it. The university incessant effort is to produce work-ready graduates and this is achieved through continuously updating the syllabus with the involvement of the experts from Industry and leading academia. As an outcome, the students of the University are placed 100% with multiple job offers in the leading industry like Intel, Microsoft, Facebook, Qualcomm, Intuit, Oracle, ARM, CISCO, Yamaha, Mahindra & Mahindra, Tata Motors to name a few.

      The University has decentralized structure with six academic departments and administrative departments to facilitate functioning of the academic departments. The functioning of the academic departments is well organized under the Head of the Department. Besides teaching, and service roles to carry out the academic work, the various academic departments have become the epicentre of research and development activities in their respective areas of specialization. The academic administrative responsibilities of the University are shouldered by Dean(Academic Affairs), Dean (Examination Affairs), Dy. Dean (Research & Consultancy), Dy. Dean (Student Welfare), Chief Proctor and Chief Warden.
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

export default Institute
