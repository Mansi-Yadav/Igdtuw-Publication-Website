import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import Institute from './Components/Aboutus/InstituteHistory/Institute';
import Vision from './Components/Aboutus/Vision/Vision'
import Vcmam from './Components/Aboutus/ViceChancellor/Vcmam';
import Registrar from './Components/Aboutus/Registrar/Registrar';
import Admin from './Components/Aboutus/Administration/Admin';
import Dept1 from './Components/Department/Dept1/Dept1';
import Dept2 from './Components/Department/Dept2/Dept2';
import Dept3 from './Components/Department/Dept3/Dept3';
import Dept4 from './Components/Department/Dept4/Dept4';
import Dept5 from './Components/Department/Dept5/Dept5';
import Dept6 from './Components/Department/Dept6/Dept6';
import Dept7 from './Components/Department/Dept7/Dept7';
import Dept8 from './Components/Department/Dept8/Dept8';
import Research from './Components/Research/Research';
import Partnership from './Components/Partnership/Partnership';
import Login from './Components/Research/Login/Login';
import Signup from './Components/Research/Signup/Signup';
import UserDetails from './Components/Research/Login/UserDetails';
import ResearchPaper from './Components/ResearchPaper';
import Phd from './Components/Phd';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
} from "react-router-dom";





function App() {
  // const slides=[
  //   { url: "http://localhost:3000/image-1.jpg", label:"First image"},
  //   { url: "igdtuw\public\image-2.jpg"},
  //   { url: "igdtuw\public\image-3.jpg"},

  // ];
  // const containerStyles ={
  //   width: "500px",
  //   height: "280px",
  //   margin: "0 auto",
  // };
  return (
    
    <div className="App">
     
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/institute' element={<Institute/>}/>
      <Route path='/vision' element={<Vision/>} />
      <Route path='/vcmam' element={<Vcmam/>} />
      <Route path='/registrar' element={<Registrar/>} />
      <Route path='/admin' element={<Admin/>} />
      <Route path='/dept1' element={<Dept1/>} />
      <Route path='/dept2' element={<Dept2/>} />
      <Route path='/dept3' element={<Dept3/>} />
      <Route path='/dept4' element={<Dept4/>} />
      <Route path='/dept5' element={<Dept5/>} />
      <Route path='/dept6' element={<Dept6/>} />
      <Route path='/dept7' element={<Dept7/>} />
      <Route path='/dept8' element={<Dept8/>} />
      <Route path='/research' element={<Research/>}/>
      <Route path='/partnership' element={<Partnership/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/UserDetails' element={<UserDetails/>} />
      <Route path='/ResearchPaper' element={<ResearchPaper/>} />
      <Route path='/phd' element={<Phd/>}/>
     </Routes>
     
    
    </div> 
    
    
  );
}

export default App;
