import React from 'react';
import './Header.css';
import { Link, useLocation } from 'react-router-dom';

const Header = () : JSX.Element => {
  const location = useLocation();

  return (
    <div className="header">
      <img className="logo" alt="Caelus" src="/caelus_logo.png" style={{ width: '3%', height: '3%' }} />
      <div className="header-nav">
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
          <a
            href="https://www.notion.so/PoC-3421d1be6ef64662a992e20215637b03"
            rel="noreferrer"
            target="_blank"
            style={{ textDecoration: 'none' }}
          >
            <li className={location.pathname === '/contact' ? 'nav-element-current' : 'nav-element'}>
              <span>contact</span>
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Header;
