import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Layout from './components/Layout.jsx';

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Vans from './pages/Vans.jsx';
import VanDetail from './pages/VanDetail.jsx';

import HostLayout from './pages/Host/HostLayout.jsx';
import Dashboard from './pages/Host/Dashboard.jsx';
import Income from './pages/Host/Income.jsx';
import Reviews from './pages/Host/Reviews.jsx';

/*
const Home = () => {
  return (
    <h1>Privet, Gvenya!</h1>
  );
};

const About = () => {
  return (
    <h1>This is all about Gvenyusha!</h1>
  );
};
*/

/*
const handleLinkClick = (e) => {
  setActiveHeaderLink()
}
*/

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />
        </Route>
      </Routes>
  </BrowserRouter>
  );
};

export default App;

/*
<div className="nav__logo-box">
  <img src="" className="nav__logo" />
  <span src="nav__logo-text">#VANLIFE</span>
</div>
*/
