import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header>
      <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
        <Link>Exercise Tracker</Link>
        <ul>
          <li>
            <Link to=''></Link>
          </li>
          <li>
            <Link to=''></Link>
          </li>
          <li>
            <Link to=''></Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
