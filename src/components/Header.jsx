import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
  /*
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "red"
  }
  // alternative to assigning classNames string to className property is
  // assigning a style object to style property:
  // style={({isActive}) => isActive ? activeStyle : null }
  */

  const baseStyles = "nav__breadcrumb-link";

  return (
    <header className="page-header">
      <nav className="nav center">
        <Link to="." className="nav__logo-box nav__logo-text">
          #VANLIFE
        </Link>
        
        <ul className="nav__breadcrumbs">
          <li className="nav__breadcrumb">
            <NavLink
              className={({ isActive }) => isActive ? `${baseStyles} nav__breadcrumb-link--active underlined` : baseStyles}
              to="host">
                Host
            </NavLink>
          </li>
          <li className="nav__breadcrumb">
            <NavLink
              className={({ isActive }) => isActive ? `${baseStyles} nav__breadcrumb-link--active underlined` : baseStyles}
              to="about">
                About
            </NavLink>
          </li>
          <li className="nav__breadcrumb">
            <NavLink
              className={({ isActive }) => isActive ? `${baseStyles} nav__breadcrumb-link--active underlined` : baseStyles}
              to="vans">
                Vans
            </NavLink>
          </li>
          <li className="nav__breadcrumb nav__breadcrumb--login">
            <NavLink
              className={({ isActive }) => isActive ? `${baseStyles} nav__breadcrumb-link--active underlined` : baseStyles}
              to="login">
                Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

