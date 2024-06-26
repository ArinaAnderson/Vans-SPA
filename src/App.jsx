import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { 
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  redirect
} from 'react-router-dom';
import Layout from './components/Layout.jsx';

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Vans, { loader as vansLoader } from './pages/Vans.jsx';
import VanDetail, { loader as vanDetailLoader} from './pages/VanDetail.jsx';
import Login, { loader as loginLoader } from './pages/Login.jsx';

import HostLayout from './pages/Host/HostLayout.jsx';
import Dashboard from './pages/Host/Dashboard.jsx';
import Income from './pages/Host/Income.jsx';
import HostVans, { loader as hostVansLoader } from './pages/Host/HostVans.jsx';
import HostVanDetail, { loader as hostVanDetailLoader } from './pages/Host/HostVanDetail.jsx';
import Reviews from './pages/Host/Reviews.jsx';

import HostVanInfo from './pages/Host/HostVanInfo.jsx';
import HostVanPricing from './pages/Host/HostVanPricing.jsx';
import HostVanPhotos from './pages/Host/HostVanPhotos.jsx';

import Error404 from './pages/Error404.jsx';

import Error from './components/Error.jsx';

import { requireAuth } from './utils/utils.js';

const App = () => {
  const [allVans, setAllVans] = useState(null);
  const [currentVan, setCurrentVan] = useState(null);
  const [currentHostVans, setCurrentHostVans] = useState(null);

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="host" element={<HostLayout />}>
        <Route
          index
          element={<Dashboard />}
          loader={async () => {
            await requireAuth();
            return null;
          }}
        />
        <Route
          path="income"
          element={<Income />}
          loader={async () => {
            await requireAuth();
            return null;
          }}
        />
        <Route
          path="vans"
          element={
            <HostVans currentHostVans={currentHostVans} setCurrentHostVans={setCurrentHostVans} setCurrentVan={setCurrentVan} />
          }
          loader={hostVansLoader}
          errorElement={<Error />}
        />
        <Route
          path="vans/:id"
          element={
            <HostVanDetail currentVan={currentVan} setCurrentVan={setCurrentVan} />
          }
          loader={hostVanDetailLoader}
          errorElement={<Error />}
        >
          <Route
            index
            element={<HostVanInfo />}
            loader={async () => {
              await requireAuth();
              return null;
            }}
          />
          <Route
            path="pricing"
            element={<HostVanPricing />}
            loader={async () => {
              await requireAuth();
              return null;
            }}
          />
          <Route
            path="photos"
            element={<HostVanPhotos />}
            loader={async () => {
              await requireAuth();
              return null;
            }}
          />
        </Route>
        <Route
          path="reviews"
          element={<Reviews />}
          loader={async () => {
            await requireAuth();
            return null;
          }}
        />
      </Route>
      
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route
        path="vans"
        element={
          <Vans setCurrentVan={setCurrentVan} allVans={allVans} setAllVans={setAllVans} />
        }
        loader={vansLoader}
        errorElement={<Error />}
      />
      <Route
        path="vans/:id"
        element={
          <VanDetail currentVan={currentVan} setCurrentVan={setCurrentVan} errorElement={<Error />} />
        }
        loader={vanDetailLoader}
        errorElement={<Error />}
      />
      <Route
        path="login"
        element={
          <Login />
        }
        loader={loginLoader}
        errorElement={<Error />}
      />
      <Route path="*" element={<Error404 />} />
    </Route>
  ));

  return (
    <RouterProvider router={router} />
  );
};

export default App;

/*
<Route path="/" element={<Layout />}>
    <Route path="host" element={<HostLayout />}>
      <Route index element={<Dashboard />} />
      <Route path="income" element={<Income />} />
      <Route
        path="vans"
        element={
          <HostVans currentHostVans={currentHostVans} setCurrentHostVans={setCurrentHostVans} setCurrentVan={setCurrentVan} />
        }
      />
      <Route
        path="vans/:id"
        element={
          <HostVanDetail currentVan={currentVan} setCurrentVan={setCurrentVan} />
        }
      >
        <Route index element={<HostVanInfo />} />
        <Route path="pricing" element={<HostVanPricing />} />
        <Route path="photos" element={<HostVanPhotos />} />
      </Route>
      <Route path="reviews" element={<Reviews />} />
    </Route>
    
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route
      path="vans"
      element={
        <Vans setCurrentVan={setCurrentVan} allVans={allVans} setAllVans={setAllVans} />
      }
    />
    <Route
      path="vans/:id"
      element={
        <VanDetail currentVan={currentVan} setCurrentVan={setCurrentVan} />
      }
    />
    <Route path="*" element={<Error404 />} />
  </Route>
*/

/*
<div className="nav__logo-box">
  <img src="" className="nav__logo" />
  <span src="nav__logo-text">#VANLIFE</span>
</div>
*/
