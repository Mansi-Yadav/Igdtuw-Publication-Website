import React from 'react'
import './Admin.css';
import igdtuwlogo from './Images/igdtuwlogo.jpg';
import logo3 from './Images/logo3.jpg';
import { NavLink } from 'react-router-dom';
import {IoMdCall, IoLogoLinkedin, IoLogoFacebook, IoLogoTwitter, IoLogoYoutube} from 'react-icons/io';
import {FaMapMarker} from 'react-icons/fa';
import Header from '../../Header';

const Admin = () => {
  return (
    <div className='admin'>
      {/* Header */}
      <Header/>
        {/* Main Content */}
        <div className='admin-main'>
        <h3 className='admin-heading'>UNIVERSITY ADMINISTRATION</h3>
        <div className='admin-table'>
          <table>
            <tbody>
          <tr>
            <th>NAME</th>
            <th>DESIGNATION</th>
          </tr>
          <tr>
           <td>Sh. Vinai Kumar Saxena, Hon'ble Lt. Governor of Delhi</td> 
           <td>Chancellor</td>
          </tr>
          <tr>
            <td>Dr. (Mrs.) Amita Dev</td>
            <td>Vice Chancellor</td>
          </tr>
          <tr>
            <td>Prof. Manoj Soni</td>
            <td>Registrar</td>
          </tr>
          <tr>
          <th colspan="2">DEANS AND DEPUTY DEANS OF UNIVERSITY</th>
          </tr>
          <tr>
            <td>Prof. Ashwni Kumar</td>
            <td>Dean (International Affairs)</td>
          </tr>
          <tr>
            <td>Prof. R K Singh</td>
            <td>Dean (Student Welfare)</td>
          </tr>
          <tr>
            <td>Prof. Ranu Gadi</td>
            <td>Dean (Research & Collaboration and Industrial Research & Development)</td>
          </tr>
          <tr>
            <td>Prof. Jasdeep Kaur Dhanoa</td>
            <td>Dean (Academic Affairs)</td>
          </tr>
          <tr>
            <td>Prof. Arun Sharma</td>
            <td>Dean (Examination Affairs)</td>
          </tr>
          <tr>
            <td>Prof. Devender Tayal</td>
            <td>Chief Proctor</td>
          </tr>
          <tr>
            <td>Prof. Rashmi Ashtt</td>
            <td>Dy. Dean (Student Welfare)</td>
          </tr>
          <tr>
            <th colspan="2">HEAD OF DEPARTMENTS</th>
          </tr>
          <tr>
            <td>Prof. Arun Sharma</td>
            <td>HOD (Computer Science Engineering)</td>
          </tr>
          <tr>
            <td>Prof. A. K. Mohapatra</td>
            <td>HOD (Information Technology)</td>
          </tr>
          <tr>
            <td>Prof. Shalini Arora</td>
            <td>HOD (Applied Science & Humanities)</td>
          </tr>
          <tr>
            <td>Prof. N. R. Chauhan</td>
            <td>HOD (Mechanical & Automation Engineering)</td>
          </tr>
          <tr>
            <td>Ar. Preeti Chauhan</td>
            <td>HOD (Architecture & Planning)</td>
          </tr>
          <tr>
            <td>Prof. Nidhi Goel</td>
            <td>HOD (Electronics & Communication Engineering)</td>
          </tr>
          <tr>
            <td>Prof. Arvind Kr. Jayant</td>
            <td>HOD (Management)</td>
          </tr>
          <tr>
            <td>Prof. Poonam Bansal</td>
            <td>HOD (Artificial Intelligence and Data Science)</td>
          </tr>
          <tr>
            <th colSpan="2">TRAINING AND PLACEMENT OFFICERS</th>
          </tr>
          <tr>
            <td>Prof. N. R. Chauhan</td>
            <td>TPO (MAE)</td>
          </tr>
          <tr>
            <td>Prof. Jasdeep Kaur Dhanoa</td>
            <td>TPO (IT,CSE,ECE)</td>
          </tr>
          <tr>
            <th colSpan="2">ADMINISTRATION</th>
          </tr>
          <tr>
            <td>Prof. Brijesh Kumar</td>
            <td>Director (Planning)</td>
          </tr>
           <tr>
            <td>Ar. Preeti Chauhan</td>
            <td>Additional Registrar (GA)</td>
          </tr>
          <tr>
            <td>Prof. Manoj Soni</td>
            <td>Additional Registrar (HR)</td>
          </tr>
          <tr>
            <td>Dr. Sanjib Kumar Sahu</td> 
            <td>Deputy Controller of Examinations</td>
          </tr>
          <tr>
            <td>Dr. Subhash Singh</td>
            <td>Deputy Registrar (Academic Affairs)</td>
          </tr>
          <tr>
            <td>Dr. Nonita Sharma</td>
            <td>Manager(International Affairs)</td>
          </tr>
          <tr>
            <td>Dr. Deepak Kumar Sharma</td>
            <td>Coordinator(IRD)</td>
          </tr>
          <tr>
            <td>Dr. Richa Yadav</td>
            <td>Ph.D Coordinator</td>
          </tr>
          <tr>
            <td>Sh. Navneet Singh</td>
            <td>Deputy Finance Officer</td>
          </tr>
          <tr>
            <td>Ms. Sarita Gupta</td>
            <td>Assistant Finance Officer</td>
          </tr>
          <tr>
            <td>Er. Sagar Goel</td>
            <td>In-charge IT Services & Assistant Registrar (Examination)</td>
          </tr>
          <tr>
            <td>Ms. Sanjana Meena</td>
            <td>Assistant Registrar (General Administration & Purchase)</td>
          </tr>
          <tr>
            <td>Mr. Jagdish</td>
            <td>Assistant Registrar (Administration)</td>
          </tr>
          <tr>
            <td>Mr. Sunil Razdan</td>
            <td>Assistant Accounts Officer</td>
          </tr>
          </tbody>
          </table>
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

export default Admin
