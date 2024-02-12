import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import Search from '../../assets/search-solid.svg';

const Navbar = () => {
  return (
    <nav>
      <div className='Navbar'>
        <Link to='/' className='nav-item nav-btn'>
          <img src={logo} alt="logo" />
        </Link>
        <Link to='/about' className='nav-item nav-btn'>About</Link>
        <Link to='/products' className='nav-item nav-btn'>Products</Link>
        <Link to='/search' className='nav-item nav-btn'>For search</Link>
        <form>
          <input type="text" placeholder='Search...' />
          <img src={Search} alt="search" />
        </form>
      </div>     
    </nav>
  );
};

export default Navbar;
