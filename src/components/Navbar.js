import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header>
      <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
        <Link to='/' className='navbar-brand'>
          Exercise Tracker
        </Link>
        <div className='collapse navbar-collapse'>
          <ul className='navbar-nav mr-auto'>
            <li className='navbar-item'>
              <Link to='/' className='navbar-link text-light mr-2'>
                Exercises
              </Link>
            </li>
            <li className='navbar-item'>
              <Link to='/create' className='navbar-link text-light mr-2'>
                Create Exercises Log
              </Link>
            </li>
            <li className='navbar-item'>
              <Link to='/user' className='navbar-link text-light mr-2'>
                Create User
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
