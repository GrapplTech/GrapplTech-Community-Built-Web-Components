import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="container">
      <div className="logo">
        <img src="/logo.png" alt="logo" className="logo-img" />
      </div>
      <div className="navLinks showmenu">
        <ul className="links">
          <li>Home</li>
          <li>Link 1</li>
          <li>Link 2</li>
          <li>Link 3</li>
          <li>Link 4</li>
        </ul>
        <button className="loginBtn btn">LOGIN</button>
      </div>
    </nav>
  );
};

export default Navbar;
