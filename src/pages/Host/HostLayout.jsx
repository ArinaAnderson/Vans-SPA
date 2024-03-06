import React, { useState, useEffect} from 'react';
import { Link, Outlet } from "react-router-dom";

const HostLayout = () => {
  return (
    <div className="center">
      <ul className="host-nav">
        <li className="">
          <Link to="/host" className="host-nav__link host-nav__link--active underlined">Dashboard</Link>
        </li>
        <li className="">
          <Link to="/host/income" className="host-nav__link  underlined">Income</Link>
        </li>
        <li className="">
          <Link to="../vans" className="host-nav__link underlined">Vans</Link>
        </li>
        <li className="">
          <Link to="/host/reviews" className="host-nav__link underlined">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
// className="btn btn--orange"
export default HostLayout;
