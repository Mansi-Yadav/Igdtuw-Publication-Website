import React, { useState } from 'react'
import './Home.css';
// import igdtuw from './Components/Home/igdtuw.jpg';
import igdtuwlogo from './Images/igdtuwlogo.jpg';
import logo3 from './Images/logo3.jpg';
import igdtuw from './Images/igdtuw.jpg';
import Patent from './Images/Patent.jpg';
import Product from './Images/Product.jpg';
import Project from './Images/Project.jpg';
import Publication from './Images/Publication.jpg';
import vcmadam from './Images/vcmadam.png';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { IoMdCall, IoLogoLinkedin, IoLogoFacebook, IoLogoTwitter, IoLogoYoutube } from 'react-icons/io';
import { FaMapMarker } from 'react-icons/fa';
import Header from '../Header';
import ResearchPaper from '../ResearchPaper';
import Phd from '../Phd';

const Home = () => {
    return (
        <div className='home'>
            <Header />
            <div className='image-board'>
                <img className='clg-image-home' src={igdtuw} alt="my image"></img>
                <div className='board'>
                    <table className='data'>
                        <tr className='head'>NOTICE BOARD</tr>
                        <tr><a href='https://dpl.gov.in/' target="_blank" rel="noreferrer">DELHI PUBLIC LIBRARY</a></tr>
                        <tr><NavLink to='/Phd'>Ph.D. PROGRAM & RESEARCH AREAS</NavLink></tr>
                        <tr><a href='https://www.igdtuw.ac.in/Admission.php?id=6' target="_blank" rel="noreferrer">Ph.D ADMISSION IGDTUW</a></tr>
                        <tr><NavLink to='/Research'>ONGOING SPONSORED RESEARCH PROJECTS</NavLink></tr>
                        <tr><a href='https://aist2022.com/' target="_blank" rel="noreferrer">AIST-2021</a></tr>
                        <tr><a href='https://www.ieee.org/' target="_blank" rel="noreferrer">IEEE</a></tr>
                        <tr><a href='https://dst.gov.in/' target="_blank" rel="noreferrer">MINISTRY OF SCIENCE AND TECHNOLOGY</a></tr>
                        <tr><a href='https://dhr.gov.in/' target="_blank" rel="noreferrer">DEPARTMENT OF HEALTH RESEARCH</a></tr>
                    </table>
                </div>
            </div>
            <div className='home-box-container'>

                <div className="home-box">
                    <h3 className='name-box'>SCIE Publications</h3>
                    <h3 className='name-box'>(April, 2022 – March, 2023)</h3>
                    {/* <div className='ml-paper'> */}
                        <a className='ml-paper' href='https://www.scopus.com/authid/detail.uri?authorId=9045233100' target="_blank" rel="noreferrer">Secure Density-Based
                            Unsupervised Learning Method with Malicious Node Detection to Improve the Network
                            Lifespan in Densely Deployed WSN</a>

                    {/* </div> */}
                    {/* <div className='ml-paper'> */}
                        <a className='ml-paper' href='https://www.scopus.com/authid/detail.uri?authorId=56785064400' target="_blank" rel="noreferrer">Deep
                            learning model for temperature prediction: an empirical study</a>
                    {/* </div> */}
                    {/* <div className='ml-paper'> */}
                        <a className='ml-paper' href='https://www.scopus.com/authid/detail.uri?authorId=55574239697' target="_blank" rel="noreferrer">Detection of DDoS Vulnerability in Cloud
                            Computing Using the Perplexed Bayes Classifier</a>
                    {/* </div> */}
                </div>
                <div className="home-box">
                    <h3 className='name-box'>SCI/SCIE Publications</h3>
                    <h3 className='name-box'>(April, 2020 – March, 2021)</h3>
                    {/* <div className='ml-paper'> */}
                        <a className='ml-paper' href='https://dblp.org/pid/57/9217.html' target="_blank" rel="noreferrer">An energy efficient and load
                            balanced sink mobility for wireless sensor networks.</a>

                    {/* </div> */}
                    {/* <div className='ml-paper'> */}
                        <a className='ml-paper' href='https://dblp.org/pid/128/8045.html' target="_blank" rel="noreferrer">DecaDroid Classification and Characterization of Malicious Behaviour in Android
                            Applications.</a>
                    {/* </div> */}
                    {/* <div className='ml-paper'> */}
                        <a className='ml-paper' href='https://dblp.org/pid/264/8745.html' target="_blank" rel="noreferrer">An approach to design and develop generic integrated
                            architecture for autonomic software system.</a>
                    {/* </div> */}

                </div>
                <div className="home-box">
                    <h3 className='name-box'>SCOPUS Publications</h3>
                    <h3 className='name-box'>(April, 2020 – March, 2021)</h3>
                    {/* <div className='ml-paper'> */}
                        <a className='ml-paper' href='https://link.springer.com/article/10.1007/s13369-019-04250-6' target="_blank" rel="noreferrer">A Comparative Analysis
                            on Effort Estimation for Agile and Non-agile Software Projects Using DBN-ALO.</a>

                    {/* </div> */}
                    {/* <div className='ml-paper'> */}
                        <a className='ml-paper' href='https://dblp.org/pid/57/9217.html' target="_blank" rel="noreferrer">Energy Efficient Model for
                            Recovery from Multiple Nodes Failure in Wireless Sensor Networks.</a>
                    {/* </div> */}
                    {/* <div className='ml-paper'> */}
                        <a className='ml-paper' href='https://dblp.org/db/journals/cee/cee77.html' target="_blank" rel="noreferrer">A novel parallel classifier scheme for vulnerability
                            detection in Android.</a>
                    {/* </div> */}

                </div>


            </div>
            <div className='home-fade-in-text'>

                <h3 className='vctitle'> THE HON'BLE VICE CHANCELLOR'S MESSAGE </h3>
                <div className='vcmam'>
                    <img className='vcimg' src={vcmadam} alt="my image"></img>
                    <div className="vcmsg"> We are absolutely privileged to live in an era of Artificial Intelligence and data abundance. The evolution of Deep Learning for Artificial Intelligence has led to incredible advances in nearly all fields of technology which promises an outstripping future. The indispensable necessity of Artificial Intelligence couldn’t be more imposed upon in the recent trying times. Better healthcare, intelligent flying cars, improved access to financial resources and more informed allocation of state resources are just a few of what can be in the next decade.</div>
                    <div className="vcmsg">IGDTUW has established Centre of Excellence - Artificial Intelligence with the support of Department of Science and Technology, GOI. I am happy that COE - AI is doing excellent work in niche research areas like Speech Technology, NLP, Computer Vision and other domains by applying latest AI Technologies including ML and DL. By bringing together a team of renowned Academicians, Researchers, Faculty and Students, the Centre of Excellence - ArtificialIntelligence strives to create a congregation ofideas and intents at a single platform. i am happy to know that coe-ai is releasing its first newsletter which highlights of various activities done under coe along with the future plan. I am sure that in coming time coe-ai will be more vibrant in terms of various activities at national and internationallevel. "The Purpose of Artificial Intelligence is to Re - Engineer the Human Mind" </div>

                </div>
                <h4 className='home-heading5'> "The Purpose of Artificial Intelligence is to Re - Engineer the Human Mind" </h4>
                {/* VC */}
            </div>
            {/* Footer */}
            <footer className='foot'>
                <div className='footer'>


                    <div className='links'>
                        <h4>QUICK LINKS</h4>
                        <br />
                        <div className='qlinks'>
                            <a href="https://dst.gov.in/" target="_blank" rel="noreferrer">Department of Science and Technology</a>
                            <a href="https://dhr.gov.in/" target="_blank" rel="noreferrer">Department of Health Research</a>
                            <a href="https://www.ieee.org/" target="_blank" rel="noreferrer">IEEE</a>
                            <a href="https://link.springer.com/search?facet-discipline=%22Computer+Science%22" target="_blank" rel="noreferrer">Springer</a>
                        </div>
                    </div>
                    <div className='joinus'>
                        <h4>Join Us</h4>
                        <br />
                        <div className='medialinks'>
                            <a href="https://www.facebook.com/igdtuw.delhi.5" target="_blank" rel="noreferrer" className="logos"><IoLogoFacebook /></a>
                            <a href="https://mobile.twitter.com/igdtuw_delhi" target="_blank" rel="noreferrer" className="logos">< IoLogoTwitter /> </a>
                            <a href="https://www.linkedin.com/school/indira-gandhi-delhi-technical-university-for-women-new-delhi/" target="_blank" rel="noreferrer" className="logos"><IoLogoLinkedin /></a>
                            <a href="https://www.youtube.com/channel/UCKmYhevZ59gJJP0ZbpReBKA" target="_blank" rel="noreferrer" className="logos"><IoLogoYoutube /></a>
                        </div>
                    </div>
                    <div className='footer1'>
                        <h4>Contact Us:</h4>
                        <br />
                        <div>
                            <div>"Indira Gandhi Delhi Technical University for Women"</div>
                            <i className='address'>
                                <FaMapMarker />  Madrasa Road
                                <br /> Opposite St. James Church
                                <br /> Kashmere Gate
                                <br /> Delhi-110006
                                <br />
                                <br />  <IoMdCall /> Telephone: 011- 23900261, 23900264 </i>

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

export default Home
