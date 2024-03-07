import React, { useState, useEffect} from 'react';
import { NavLink, Outlet } from "react-router-dom";

const HostLayout = () => {
  const baseStyles = "host-nav__link underlined";
  return (
    <div className="center">
      <ul className="host-nav">
        <li className="">
          <NavLink
            to="/host"
            end
            className={({ isActive }) => isActive ? `${baseStyles} host-nav__link--active` : baseStyles}
          >
            Dashboard
          </NavLink>
        </li>
        <li className="">
          <NavLink
            to="/host/income"
            className={({ isActive }) => isActive ? `${baseStyles} host-nav__link--active` : baseStyles}
          >
            Income
          </NavLink>
        </li>
        <li className="">
          <NavLink
            to="../vans" 
            className={({ isActive }) => isActive ? `${baseStyles} host-nav__link--active` : baseStyles}
          >
              Vans
          </NavLink>
        </li>
        <li className="">
          <NavLink
            to="/host/reviews"
            className={({ isActive }) => isActive ? `${baseStyles} host-nav__link--active` : baseStyles}
          >
              Reviews
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
// className="btn btn--orange"
export default HostLayout;
