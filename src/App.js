import './App.css';
import styles from './Styles.module.css';
import React, { useState } from 'react';
import logo from '../src/assets/images/logo.png'
import HomeScreen from './screens/home';
import TuitionScreen from './screens/tuition';
import AboutScreen from './screens/about';
import AdmissionScreen from './screens/admission';
import ApplyNowScreen from './screens/apply_now';
import PartnershipScreen from './screens/Internship';
import {BrowserRouter,Routes, Route,Link} from 'react-router-dom';
import Registeration from './screens/Registeration';
import MajorDetail from './screens/MajorDetail';


function App() {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleMouseOver = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };
  return (
    <BrowserRouter>
      <div>
        <div className='menu-container-secondary'>
          <Link className="menu-item-sec" to='/#news'>News & Event</Link>
          <Link className="menu-item-sec" to='https://fb.watch/l-c9QbvpzY/'>Student Life</Link>
          <Link className="menu-item-sec" to='/partner'>Alumni</Link>
          <Link className="menu-item-sec" to='https://elearnings.setecu.com/login/index.php'>E-learning</Link>
        </div>
        <div className="menu-container-primary">
        <Link className='menu-item' to='/'><img src={logo} alt='logo' style={{width:'100%',height:'100%'}}></img></Link>
          <Link className='menu-item' to='/'>Home</Link>
          <Link className="menu-item" to='/aboutus'>About Us</Link>
          <Link className="menu-item" to='/admissions'>Admissions</Link>
          <Link className="menu-item" to='/partner'>Internship</Link>
          <Link className="menu-item" to='/tuition'>Tuition</Link>
          <Link className="menu-item" to='/registerform'>Registration</Link>
          <Link className="menu-item" to='/applynow'
           onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>Apply Now</Link>
          
        </div>{isOpen && (
            <ul className={styles.dropdownMenu} 
           onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
              <li className='li'><Link className={styles.subItem} to='/aboutus'>Associate Degree</Link></li>
              <li  className='li'><Link className={styles.subItem} to='/aboutus'>Bachelor Degree</Link></li>
              <li  className='li'><Link className={styles.subItem} to='/aboutus'>Master Degree</Link></li>
            </ul>
          )}
      </div> 
      <Routes>
        <Route>
          <Route path={`/major/:arg`} element={<MajorDetail/>}></Route>
          <Route path="/registerform" element={<Registeration/>}/>
          <Route path="/" element={<HomeScreen/>}/>
          <Route path="/aboutus" element={<AboutScreen/>}/>
          <Route path="/admissions" element={<AdmissionScreen/>}/>
          <Route path="/applynow" element={<ApplyNowScreen/>}/>
          <Route path="/partner" element={<PartnershipScreen/>}/>
          <Route path="/tuition" element={<TuitionScreen/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
