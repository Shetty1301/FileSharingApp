import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
const NavBar = () => {
  return (
    <nav>
      <ul>
        <li className='nav-items'>
          <Link to='/'>Home</Link>
        </li>
        <li className='nav-items'>
          <Link to='/upload'>Upload File</Link>
        </li>
        <li className='nav-items'>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
