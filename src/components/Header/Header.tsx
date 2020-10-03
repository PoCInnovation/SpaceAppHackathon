import React from 'react';
import './Header.css';
import { Link, useLocation } from 'react-router-dom';

const Header = () : JSX.Element => {
  const location = useLocation();

  return (
    <div className="header">
      <ul className="navbar">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <li className={location.pathname === '/' ? 'nav-element-current' : 'nav-element'}>
            <span>idea</span>
          </li>
        </Link>
        <Link to="/product" style={{ textDecoration: 'none' }}>
          <li className={location.pathname === '/product' ? 'nav-element-current' : 'nav-element'}>
            <span>product</span>
          </li>
        </Link>
        <Link to="/contact" style={{ textDecoration: 'none' }}>
          <li className={location.pathname === '/contact' ? 'nav-element-current' : 'nav-element'}>
            <span>contact</span>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
