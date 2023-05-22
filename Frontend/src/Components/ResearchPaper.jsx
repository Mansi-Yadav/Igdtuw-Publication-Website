// import React, { Component, useEffect, useState } from 'react';
// // import axios from 'axios';
// import igdtuwlogo from './Images/igdtuwlogo.jpg';
// import logo3 from './Images/logo3.jpg';
// import './ResearchPaper.css';
// import { AiTwotoneHome } from "react-icons/ai";
// import { Link, NavLink } from 'react-router-dom';
// import Home from './Home/Home';
// import SearchBar from './Research/SearchBar';
// import { FaSearch } from "react-icons/fa";

// export default function ResearchPaper() {
//   const [researchData, setresearchData] = useState([]);

//   const getAllData = async () => {
//     try {
//       const getPaper = await fetch(
//         `http://localhost:4000/viewAllPaper`,
//         {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       const res = await getPaper.json();
//       setresearchData(res?.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleSearch = async (event) => {

//     try {
//       let key = event.target.value;
//       if (key) {
//         const result = await fetch(
//           `http://localhost:4000/search/${key}`);
//         //   {
//         //     method: "GET",
//         //     headers: {
//         //       "Content-Type": "application/json",
//         //     },
//         //   }
//         // );
//         const resultJson = await result.json();
//         if (resultJson) {
//           setresearchData(resultJson);
//         }
//       }
//       else {
//         getAllData();
//       }

//     } catch (error) {
//       console.log(error);
//     }
//   };


//   useEffect(() => {
//     getAllData();
//   }, []);
//   console.log(researchData);

//   return (
//     <div className='research-paper'>
//       <div className='userDetails'>
//         <div className='top'>
//           <img className='logo' src={igdtuwlogo} alt="my image"></img>
//           <h1 className='heading1'>INDIRA GANDHI DELHI TECHNICAL UNIVERSITY FOR WOMEN</h1>
//           <img className='logo3' src={logo3} alt="my image"></img>
//         </div>
//         <h3 className='heading2'>(Established by Govt. of Delhi vide Act 9 of 2012)</h3>
//         <h3 className='heading3'>ISO 9001:2015 Certified University</h3>
//       </div>
//       {/* <NavLink to='/' className='researchpaper-home-icon'><AiTwotoneHome/></NavLink> */}
//       {/* <SearchBar onchange={handleSearch} /> */}
//       <div className="searchbar-input-wrapper">
//         <FaSearch id="search-icon" />
//         <input type="text"
//           placeholder="Search"
//           onChange={handleSearch} />
//         {/* <ul>
//         {input?.data.map((result)=>(
//           <li>{result.paperName}</li>
//         ))}
//       </ul> */}
//         <NavLink to='/' className='researchpaper-home-icon'><AiTwotoneHome /></NavLink>
//       </div>



//       <table>
//         <thead>
//           <tr>
//             <th>Name of Faculty</th>
//             <th>Name of Paper</th>
//             <th>Link of Paper</th>
//             <th>Year of Publication</th>
//           </tr>
//         </thead>
//         <tbody >
//           {researchData.map((paper) => (
//             <tr>
//               <td >
//                 <div >
//                   {paper.username}
//                 </div>
//               </td>
//               <td >
//                 <div >
//                   {paper.paperName}
//                 </div>
//                 {/* <div className="text-sm text-gray-500 dark:text-gray-300">
//                                 {paper.email}
//                               </div> */}

//               </td>
//               <td className="px-12 py-4 whitespace-nowrap">
//                 <div className="text-sm text-gray-900 dark:text-white">
//                   <a href={paper.paperLink} target="_blank">{paper.paperLink}</a>
//                 </div>

//               </td>

//               <td >
//                 <div >
//                   {paper.yearOfPublication}
//                 </div>

//               </td>
//             </tr>
//           ))}
//         </tbody>
//         {/* Add Paper Details Here */}
//       </table>
//     </div>
//   )
// };















