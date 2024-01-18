// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';


// stuck on how to render the login and logoout and correct pages for react
const Navbar = () => {
  return (
    <nav className="bg-teal-700 text-white sticky top-0 z-10">
      <div className='max-w-4x1 ,x-auto p-4 flex justify-between items-center'>
      <Link to='/' className='text-3x1 font-medium'>
        Whiskey
      </Link>
      <div>
        <ul>
          <li>Info</li>
          <li>Contact</li>
        </ul>
      </div>
      </div>
      

    </nav>
  );
};

export default Navbar;