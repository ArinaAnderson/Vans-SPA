import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

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

const App = () => {
  return (
    <BrowserRouter>
      <Link to="/">Home </Link>
      <Link to="/about">About</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
  </BrowserRouter>
  );
};

export default App;

