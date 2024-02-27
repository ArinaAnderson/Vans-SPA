import React from 'react';
import ReactDOM from 'react-dom/client';

const Header = () => {
  return (
    <nav>
      <div className="nav__logo-box">
        <img src="" className="nav__logo" />
        <span>#VANLIFE</span>
      </div>
      <ul className="nav__breadcrumbs">
        <li>
          About
        </li>
        <li>
          Vans
        </li>
      </ul>
    </nav>
  );
};

export default Header;

