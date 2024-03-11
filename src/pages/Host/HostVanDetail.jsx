import React, { useState, useEffect} from 'react';
import { Link, NavLink, Outlet, useParams } from "react-router-dom";
import axios from 'axios';

const HostVanDetail = ({ currentVan, currentHostVans, setCurrentVan}) => {
  // const [vanData, setVanData] = useState(null); 
  const [error, setError] = useState(null);
  const [requetStatus, setRequestStatus] = useState('idle');

  const params = useParams();

  useEffect(() => {
    if (currentVan) {
      return;
    }
  
    setError(null);
    setRequestStatus('loading');
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
  }, []); // [params.id]);
  
  const baseStyles = "host-van__nav-link underlined";

  const renderOutput = () => {
    if (requetStatus === 'failure') {
      return <h2>{`Error ${error.message}, please, try again...`}</h2>; 
    }
    if (requetStatus === 'loading') {
      return (<h2>Loading...</h2>);
    }
    /*
    if (vanData === null) {
      return (<h2>No data available...</h2>);
    }
    */
    if (currentVan === null) {
      return (<h2>Loading...</h2>);
    }

    // const { type, name, id, imageUrl, description, price } = vanData;
    const { type, name, id, imageUrl, description, price } = currentVan;
    
    // to="../vans"

    return (
      <main className="host-van">
        <div className="center host-van-detail">
          <Link
            className="van__back-link underlined"
            to=".."
            relative="path"
            onClick={() => setCurrentVan(null)}
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
          <Outlet context={[currentVan, setCurrentVan]} />
        </div>
      </main>
    );
  }

  return renderOutput();
};
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


