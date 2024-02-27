import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx'

const mountNode = document.getElementById('root');
const root = ReactDOM.createRoot(mountNode);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="" element={<App />} />
    </Routes>
  </BrowserRouter>,
);
