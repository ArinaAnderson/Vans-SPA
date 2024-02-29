import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import "../server";

const mountNode = document.getElementById('root');
const root = ReactDOM.createRoot(mountNode);
root.render(
  <App />
);
