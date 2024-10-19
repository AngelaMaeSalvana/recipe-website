import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';  
import Logo from '../assets/logo-wo.png';

const LandingNav = () => {
  const location = useLocation();  
  const navigate = useNavigate();

  const getActiveClass = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  const handleLogin = () => {
    setTimeout(() => {
      navigate('/login');  
    }, 2000);  
  };

  const handleSignUp = () => {
    setTimeout(() => {
      navigate('/signup');  
    }, 2000); 
  }

  return (
    <div className='nav-con'>
      <div className='logo-con'>
        <img src={Logo} alt='Logo'/>
        <h3>Dish Diaries</h3>
      </div>
      
      <div className='links-con'>
        <Link to='/' className={getActiveClass('/')}>Home</Link>
        <Link to='/about' className={getActiveClass('/about')}>About</Link>
        <Link to='/contact' className={getActiveClass('/contact')}>Contact Us</Link>
      </div>

      <div className='button-con'>
        <button className='primary-btn' onClick={handleLogin}>Login</button>
        <button className='secondary-btn' onClick={handleSignUp}>Sign Up</button>
      </div>
    </div>
  );
};

export default LandingNav;
