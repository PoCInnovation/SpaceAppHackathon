import React from 'react';
import './Header.css';

const Header = () : JSX.Element => (
  <div className="header">
    <ul className="navbar">
      <li className="nav-element"><a href="#">Home</a></li>
      <li className="nav-element"><a href="#">Idea</a></li>
      <li className="nav-element"><a href="#">Contact</a></li>
   </ul>
  </div>
);

export default Header;
