import React from 'react'
import './Vcmam.css';
import igdtuwlogo from './Images/igdtuwlogo.jpg';
import logo3 from './Images/logo3.jpg';
import vcmadam from './Images/vcmadam.png';
import { NavLink } from 'react-router-dom';
import {IoMdCall, IoLogoLinkedin, IoLogoFacebook, IoLogoTwitter, IoLogoYoutube} from 'react-icons/io';
import {FaMapMarker} from 'react-icons/fa';
import Header from '../../Header';

const Vcmam = () => {
  return (
    <div className='vcmam'>
        {/* Header */}
        <Header/>
        {/* Main Content */}
        <div className='vc-main'>
        <h3 className='vc-heading'>VICE CHANCELLOR</h3>
        <h4>“You Educate a Man; You Educate a Man.
            You Educate a Woman; You Educate a Generation.”
        </h4>
        <div className='vc-para'>
        <img className='vc-img' src={vcmadam} alt="my image"></img>
        It feels great to be the wind beneath the wings of one of the top ranking Emerging Engineering Institutes of Technology in India. The devouring stride of IGDTUW, since its inception in 1998 as IGIT, has been exemplary, culminating in transforming itself into an icon for women empowerment. To be a vibrant part of this illustrious edifice of teaching and learning is certainly a matter of stupendous pride and a new-found privilege for me.


        IGDTUW has evolved to become a national flagship, research-led university with a mission to foster an environment for excellence in professional education and ensure active participation of women in the field of Engineering, Science, Management and Technology, thereby attempting to strike out a fine balance between world of work and life. The university vows to devise sustainable systems and state-of-the-art infrastructure to enable the Indian women to dawn the role of future leaders, managers, researchers and productive team players in the field of science, technology.

        The University offers a number of B.Tech, B.Arch, M.Tech and Ph.D programmes in faculty of Engineering and Technology. It also aims at teaching, training and elevating the students to an independent level where they can achieve higher level of excellence and professionalism.
        The University is equipped with the state of the art Learning Resource Centre to support the learning and research activities of students and faculty. The renovated infrastructure, the qualified and experienced faculty members, latest equipments, instruments, Hi-end computers, teaching aids, multimedia, wi-fi connectivity required for modern day teaching create an edge over other universities. The hostel, the common room equipped with fitness equipments, yoga facility and indoor games, a guest house, the dispensary and banking facility conjure up a spell of being the most ideal campus.

        Our university has always been a placement/ job utopia for our students. There has been an unprecedented boom in the visiting list of companies. Many of our students have been placed in renowned National and Multinational companies. We hope to retain and revitalize the placement hub.

        Our university has always been a placement/ job utopia for our students. There has been an unprecedented boom in the visiting list of companies. Many of our students have been placed in renowned National and Multinational companies. We hope to retain and revitalize the placement hub.
        </div>
        <h4 className='vc-name'>
        Dr(Mrs).Amita Dev
        Vice Chancellor, IGDTUW
        </h4>
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

export default Vcmam
