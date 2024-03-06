import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="page-header">
      <nav className="nav center">
        <Link to="/" className="nav__logo-box nav__logo-text">
          #VANLIFE
        </Link>
        
        <ul className="nav__breadcrumbs">
          <li className="nav__breadcrumb nav__breadcrumb--active">
            <Link className="nav__breadcrumb-link nav__breadcrumb-link--active" to="/host">Host</Link>
          </li>
          <li className="nav__breadcrumb nav__breadcrumb--active">
            <Link className="nav__breadcrumb-link nav__breadcrumb-link--active" to="/about">About</Link>
          </li>
          <li className="nav__breadcrumb nav__breadcrumb--active">
            <Link className="nav__breadcrumb-link nav__breadcrumb-link--active underlined" to="/vans">Vans</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

