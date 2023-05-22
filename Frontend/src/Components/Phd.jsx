import React, { Component, useEffect, useState }  from 'react';
// import axios from 'axios';
import igdtuwlogo from './Images/igdtuwlogo.jpg';
import logo3 from './Images/logo3.jpg';
import './Phd.css';
import Header from './Header';
import {IoMdCall, IoLogoLinkedin, IoLogoFacebook, IoLogoTwitter, IoLogoYoutube} from 'react-icons/io';
import {FaMapMarker, FaRegHandPointRight} from 'react-icons/fa';

export default function Phd(){


    return(
        <div className='Phd'>
            {/* Header */}
            <Header/>

            {/* Main Content */}
            <div className='main-div-phd'>
            <div className='phd-heading-main'>
        <h3 className='phd-heading'>Ph.D. PROGRAM & RESEARCH AREAS</h3>
        
          <div className='phd-para'>
            Currently Ph.D. programme is offered in the domain of Electronics & Communication Engineering (ECE), Electrical Engineering, Information Technology (IT), Computer Application, Computer Science & Engineering (CSE), Mechanical & Automation Engineering (MAE), Applied Sciences & Humanities (ASH) and Architecture & Planning (A&P).

            To enable and nurture relevant research endeavours the University has bagged research grants from various external agencies. The researchers in the University both Faculty and students are involved in industry relevant research and consultancy in various areas of social relevance.

            The University is in the process of developing various advanced labs & centres, which would serve as the premier source of academic information for the University community through its rich collection of academic books, journals and documents with innovative technology and physical facilities.
            The Ph.D. Program is being offered in the following disciplines (but not limited to) subject to the availability of vacancy in the relevant research field:
          </div>
          </div>
          <div className='phd-table'>
            <table>
                <tbody>
                    <tr>
                        <th>Department</th>
                        <th>Research Areas</th>
                    </tr>
                    <tr>
                        <td>Computer Science & Engineering</td>
                        <td colSpan="3">
                            <p><FaRegHandPointRight/>
                            Artificial Intelligence, Big Data Analytics, Speech Translation Systems, Machine Learning, Data & Text Mining, AI, Data Analytics.</p>
                            <p><FaRegHandPointRight/>
                            Fuzzy Database Management, Intelligent Computing, Computer Education, Embedded systems, Mobile Computing, Wireless Sensor Networks.</p>
                            <p>
                            Data Analytics, Big Data Analysis, Computer Education, Embedded systems, Mobile Computing, Wireless Sensor Network.</p>
                            <p><FaRegHandPointRight/>
                            Real Time Systems, IoT, Web Technologies, Natural Language Processing, Data Mining, Algorithms, Biometrics, Deep Learning, Computer Networks.</p>
                            <p><FaRegHandPointRight/>
                            Algorithms Design, Passive Optical Networks, Image Processing, Video Retrieval, Image Retrieval, soft computing, social media analytics, social and semantic web.</p>
                        </td>
                    </tr>
                    <tr>
                    <td>Information Technology</td>
                    <td colSpan="3">
                        <p><FaRegHandPointRight/>
                        Software Engineering / Software Testing, Software Project Management, Information Security, Secure Wireless Networks, Machine Learning, Software Eng.
                        </p>
                        <p><FaRegHandPointRight/>
                        IOT, Drone and AI: IoT Smart Board Design and Testing, Drone Design and Testing, AI Applications.
                        </p>
                        <p><FaRegHandPointRight/>
                        Semiconductor Devices and Circuits: VLSI Design, Digital System Design, Flexible Electronics, Devices & Circuits Modeling and Simulation, AI, Data Analytics, Speech Technology, Data Mining.
                        </p>
                        <p><FaRegHandPointRight/>
                        Wireless Sensor Network, IoT. Network Security, Internet of Things Communication Protocols, Cloud and Fog Computing, Image and Video Processing.
                        </p>
                        <p><FaRegHandPointRight/>
                        Language Processing, Data Analytics, Software Reliability, Neural Networks, Data Communication Networks.
                        </p>
                        <p><FaRegHandPointRight/>
                        Knowledge Engineering and Semantic Web, Machine Learning and Deep Learning, Natural Language Processing, Cryptography, Cyber Forensics.
                        </p>
                        <p><FaRegHandPointRight/>
                        Cyber Security, Data Analytics, Data and Text Mining, Machine Learning, Social Media Analytics, Bio-inspired Optimization Techniques.
                        </p>
                        <p><FaRegHandPointRight/>
                        Model Based Software Testing, Information Security, Wireless Network Security, IoT Security. Distributed Consensus in Blockchain Ecosystem.
                        </p>
                        <p><FaRegHandPointRight/>
                        Computational Social Science, Online Social Media, Computer Vision.
                        </p>
                    </td>
                    </tr>
                    <tr>
                        <td>Electronics and Communication</td>
                        <td colSpan="3">
                            <p><FaRegHandPointRight/>
                            Optical Communication, Digital Signal Processing, VLSI, Strategic MGT, Telecom MGT, VLSI, Analog, Mixed Mode Circuits and Systems Design Embedded System.
                            </p>
                            <p><FaRegHandPointRight/>
                            Computer Vision, Multimedia Security, Medical Image Processing, Renewable Energy Resources, VLSI Design, Low Power Low Voltage CMOS circuits.
                            </p>
                            <p><FaRegHandPointRight/>
                            Mixed Signal design, BiCMOS Circuits, Microelectronics, Radio Frequency circuits, Analog Integrated Circuits, Control Engineering, Electrical Engineering Smart Grid, Medical Engineering..
                            </p>
                            <p><FaRegHandPointRight/>
                            Neural Network, Artificial Intelligence, Optical and Wireless communication, Digital Image Processing, Microwave and antenna design, Signal processing.
                            </p>
                            <p><FaRegHandPointRight/>
                            Wireless sensor network, Information security, IoT, Power Systems, Power Electronics, Control Systems, Electrical Engineering & Renewable Energy Sources.
                            </p>
                            <p><FaRegHandPointRight/>
                            Designing of Fractional Order Differentiators and Integrators, Optimization of Operators, Evolutionary Algorithms.
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td>Mechanical and Automation Engineering</td>
                        <td colSpan="3">
                            <p><FaRegHandPointRight/>
                            Machine Design Engineering, Tribology Fluid Film Bearing, FEM Computation Engineering, Vibration, Alternate Fuels in IC Engines.
                            </p>
                            <p><FaRegHandPointRight/>
                            Composite Material, Robotics & Automation, Manufacturing & Automation, Production and Automation Engineering, Prosthetics, Thermal Science and Engineering, Thermal Power Plant.
                            </p>
                            <p><FaRegHandPointRight/>
                            Refrigeration and Air- Conditioning, Industrial Engineering, Manufacturing and Production Engineering, Green Manufacturing.
                            </p>
                            <p><FaRegHandPointRight/>
                            Flexible Manufacturing System, and Industry 4.0, Tribology, Applied Mechanics, Material Science, Flexible Manufacturing Systems, Composite Materials..
                            </p>
                            <p><FaRegHandPointRight/>
                            Industrial Engineering and Project Management, Biomaterials, Biomedical Devices, Polymers, Polymer Processing, Composites and Scaffolds, soft robotics, computational studies, material science and manufacturing science.
                            </p>
                            <p><FaRegHandPointRight/>
                            Modification of Nano materials, thin film coating, Synthesis of Nanocrystalline spinel, Synthesis and characterization of 2D Materials like Graphene and MXene.
                            </p>
                            <p><FaRegHandPointRight/>
                            Metal Matrix Composites, Friction Stir Processing, Un-Conventional Machining of Biodegradable Materials. Green Energy via Solar Cells.
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td>Applied Science & Humanities (Physics, Chemistry, Mathematics, English)</td>
                        <td colspan="3">
                            <p><FaRegHandPointRight/>
                            Nanotechnology, Nano materials, Thin Film Technologies, Applied Optics, Digital Image Processing, Optical Information Processing, Panoramic and 3-D Imaging.
                            </p>
                            <p><FaRegHandPointRight/>
                            Atmospheric Sciences (carbonaceous aerosols, organic compounds and trace gases), Materials Science, Nanoscience and Nanotechnology.
                            </p>
                            <p><FaRegHandPointRight/>
                            Mathematical programming, Combinatorial Optimization, Allocation Problems, Operations Research, Nonlinear Programming.
                            </p>
                            <p><FaRegHandPointRight/>
                            English Literature, Communication Studies.
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td>Architecture & Planning</td>
                        <td colspan="3">
                            <p><FaRegHandPointRight/>
                            Urban planning: Infrastructure Planning, Sustainable Planning, Governance, Gender sensitive planning, Inclusive planning, Smart cities.
                            </p>
                            <p><FaRegHandPointRight/>
                            Architecture: Architectural Pedagogy, Digital architecture, Sustainable architecture, Intelligent Buildings, Gender specific Architecture.
                            </p>
                        </td>
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
};