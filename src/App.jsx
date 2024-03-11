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
import HostVans from './pages/Host/HostVans.jsx';
import HostVanDetail from './pages/Host/HostVanDetail.jsx';
import Reviews from './pages/Host/Reviews.jsx';

import HostVanInfo from './pages/Host/HostVanInfo.jsx';
import HostVanPricing from './pages/Host/HostVanPricing.jsx';
import HostVanPhotos from './pages/Host/HostVanPhotos.jsx';

const App = () => {
  const [currentVan, setCurrentVan] = useState(null);
  const [currentHostVans, setCurrentHostVans] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route
              path="vans"
              element={<HostVans currentHostVans={currentHostVans} setCurrentVan={setCurrentVan} setCurrentHostVans={setCurrentHostVans}
            />} />
            <Route
              path="vans/:id"
              element={<HostVanDetail
              currentVan={currentVan}
              currentHostVans={currentHostVans}
              setCurrentVan={setCurrentVan}
            />}>
              <Route index element={<HostVanInfo currentVan={currentVan} />} />
              <Route path="pricing" element={<HostVanPricing currentVan={currentVan} setCurrentVan={setCurrentVan} />} />
              <Route path="photos" element={<HostVanPhotos currentVan={currentVan} setCurrentVan={setCurrentVan} />} />
            </Route>
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
