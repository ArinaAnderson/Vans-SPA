import React, { useState, useEffect} from 'react';
import { Link, NavLink, Outlet, useParams, useLoaderData } from "react-router-dom";

import getRequest from '../../../api.js';
import { requireAuth } from '../../utils/utils.js';

export const loader = async ({ params }) => {
  await requireAuth();
  return getRequest(`/api/host/vans/${params.id}`);
};

const HostVanDetail = () => { // ({ currentVan, setCurrentVan}) => {
  // const [vanData, setVanData] = useState(null); 
  const [error, setError] = useState(null);
  const [requestStatus, setRequestStatus] = useState('idle');

  const data = useLoaderData();
  const currentVan = data[0];
  /*
  const params = useParams();

  useEffect(() => {
    if (currentVan) {
      return;
    }
  
    setError(null);
    setRequestStatus('loading');
    */
    /*
    axios.get(`/api/vans/${params.id}`)
      .then((response) => response.data)
      .then((payload) => {
        setRequestStatus('success');
        // setVanData(payload.vans);
        // if (currentVan === null) {
        setCurrentVan(payload.vans);
        // }
      })
      .catch((e) => {
        setRequestStatus('failure');
        setError(e);
      })
    */
    /*
    const downloadHostVan = async (url) => {
      try {
        const hostVanData = await getRequest(url);
        console.log('SPIRAL', hostVanData.vans[0]);
        setRequestStatus('success');
        if (hostVanData.vans.length === 0) {
          setCurrentVan(null);
        } else {
          setCurrentVan(hostVanData.vans[0]);
        }
      } catch(e) {
        console.log('MOCHA', e);
        setError('failed to fetch data');
        setRequestStatus('failure');
      }
    };
    downloadHostVan(`/api/host/vans/${params.id}`)
  }, []); // [params.id]);
  */
  
  const baseStyles = "host-van__nav-link underlined";

  const renderOutput = () => {
    /*
    if (requestStatus === 'loading') {
      return (<h2>Loading...</h2>);
    }
    if (requestStatus === 'failure') {
      return <h2>{`Error: ${error}...`}</h2>; 
    }
    if (currentVan === null && requestStatus === 'loading') {
      return (<h2>Loading...</h2>);
    }
    if (currentVan === null && requestStatus === 'idle') {
      return (<h2>Loading...</h2>);
    }
    if (currentVan === null && requestStatus === 'success') {
      return (<h2>No data to show</h2>);
    }
    if (currentVan === null && requestStatus === 'success') {
      return (<h2>No data to show</h2>);
    }
    */
    if (data.length === 0) {// if (allVans.length === 0) {
      return (<h2>No data to show...</h2>);
    }
    const { type, name, id, imageUrl, description, price } = currentVan;
    
    // to="../vans"

    return (
      <main className="host-van">
        <div className="center host-van-detail">
          <Link
            className="van__back-link underlined"
            to=".."
            relative="path"
            // onClick={() => setCurrentVan(null)}
          >
            Back to all vans
          </Link>
          <div className="host-van__wrap">
            <div className="host-van__img-box">
              <img className="host-van__img"  src={imageUrl} width="" height="" alt={`Image of ${name}`}/>
            </div>
            <div className="host-van__info-wrap">
              <span className={`btn van-type van-type--${type}`}>
                {`${type[0].toUpperCase()}${type.substring(1)}`}
              </span>
              <h2 className="host-van__title">{name}</h2>
              <p className="host-van__price-box"><span className="host-van__price">{`$${price}`}</span>/day</p>
            </div>
          </div>
          <ul className="host-van__nav">
            <li className="host-van__nav-item">
              <NavLink
                to="."
                end
                className={({ isActive }) => isActive ? `${baseStyles} host-van__nav-link--active` : baseStyles}
              >
                Details
              </NavLink>
            </li>
            <li className="host-van__nav-item">
              <NavLink
                to="pricing"
                className={({ isActive }) => isActive ? `${baseStyles} host-van__nav-link--active` : baseStyles}
              >
                Pricing
              </NavLink>
            </li>
            <li className="host-van__nav-item">
              <NavLink
                to="photos"
                className={({ isActive }) => isActive ? `${baseStyles} host-van__nav-link--active` : baseStyles}
              >
                Photos
              </NavLink>
            </li>
          </ul>
          <Outlet context={[currentVan]} />
        </div>
      </main>
    );
  }

  return renderOutput();
};
// <Outlet context={[currentVan, setCurrentVan]} />
// className="btn btn--orange"
export default HostVanDetail;
// `{/host/vans/${id}`

/*
<main className="van">
        <div className="center">
          <div className="van__wrap">
            <div className="van__img-box">
              <img className="van__img"  src={imageUrl} width="" height="" alt={`Image of ${name}`}/>
            </div>
            
            <span className={`btn van-type van-type--${type}`}>
            {`${vanData.type[0].toUpperCase()}${vanData.type.substring(1)}`}
            </span>

            <h2 className="van__title">{name}</h2>
            <p className="van__price-box"><span className="van__price">{`$${price}`}</span>/day</p>
            <p className="van__description">{description}</p>
            <Link className="link-button btn van__rent-link">Rent this van</Link>
          </div>
        </div>
      </main>
*/


