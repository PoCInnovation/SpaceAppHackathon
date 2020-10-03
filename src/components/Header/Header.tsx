import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () : JSX.Element => (
  <div className="header">
    <ul className="navbar">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <li className="nav-element">
          <a>idea</a>
        </li>
      </Link>
      <Link to="/product" style={{ textDecoration: 'none' }}>
        <li className="nav-element">
          <a>product</a>
        </li>
      </Link>
      <Link to="/contact" style={{ textDecoration: 'none' }}>
        <li className="nav-element">
          <a>contact</a>
        </li>
      </Link>
    </ul>
  </div>
);

export default Header;
