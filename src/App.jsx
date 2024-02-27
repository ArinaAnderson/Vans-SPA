import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Footer from './components/Footer.jsx';

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
      <header className="page-header">
        <nav className="nav center">
          <Link to="/" className="nav__logo-box nav__logo-text">
            #VANLIFE
          </Link>
          
          <ul className="nav__breadcrumbs">
            <li className="nav__breadcrumb nav__breadcrumb--active">
              <Link className="nav__breadcrumb-link nav__breadcrumb-link--active" to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
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
