import React, { useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

import getRequest from '../../../api.js';

const HostVans = ({ currentHostVans, setCurrentVan, setCurrentHostVans }) => {
  const [error, setError] = useState(null);
  const [requestStatus, setRequestStatus] = useState('idle');

  useEffect(() => {
    if (currentHostVans) {
      return;
    }
    setError(null);
    setRequestStatus('loading');
    /*
    axios.get('/api/host/vans') // 'if not hard-coded, /api/host/users/:userId/vans' ??'
      .then((response) => response.data)
      .then((payload) => {
        setRequestStatus('success');
        // setHostVans(payload.vans);
        setCurrentHostVans(payload.vans);
      })
      .catch((e) => {
        setError(e);
        setRequestStatus('failure');
      })
    */
    const downloadVans = async () => {
      try {
        const vansData = await getRequest('/api/host/vans');
        setRequestStatus('success');
        setCurrentHostVans(vansData.vans);
      } catch (e) {
        setRequestStatus('failure');
        setError('failed to fetch data');
      }
    };
    downloadVans();
  }, []);

  const renderOutput = () => {
    /*
    if (currentHostVans === null && requestStatus === 'success') {
      return <h1 className="host-vans__subtitle">You don't host any vans yet...</h1>
    }
    if (currentHostVans === null || requestStatus === 'loading') {
      return (<h2>Loading...</h2>);
    }
    if (requestStatus === 'failure') {
      return <h2>{`Error ${error.message}, please, try again...`}</h2>; 
    }
    */
    if (requestStatus === 'failure') {
      return <h2>{`Error ${error}, please, try again...`}</h2>; 
    }
    if (requestStatus === 'loading') {
      return (<h2>Loading...</h2>);
    }

    if (currentHostVans === null) {
      return (<h2>Loading...</h2>);
    }

    if (currentHostVans.length === 0) {
      return (<h2>No vans to show...</h2>);
    }

    // to={`/host/vans/${id}`}
    return (
      <>
        <h1 className="host-vans__subtitle">Your listed vans</h1>
        <ul className="host-vans__list">
          {currentHostVans.map((van) => {
            const { id, name, price, type, description, imageUrl } = van;
            return (
              <li className="host-vans__item" key={id}>
                <Link
                  className="host-vans__item-link"
                  to={id}
                  onClick={() => setCurrentVan(van)}
                  aria-label={`View details for ${name}, priced at $${price} per day`}
                >
                  <div className="host-vans__item-img-box">
                    <img className="host-vans__img van__img" src={imageUrl} width="" height="" alt={`Image of ${name}`}/>
                  </div>
                  <div className="host-vans__item-info">
                    <p className="host-vans__item-name">{name}</p>
                    <p className="host-vans__item-price">{`$${price}`}</p>
                  </div>
                  <button type="button" className="host-vans__edit-btn underlined">Edit</button>
                </Link>
              </li>
            );
          })}
        </ul>
      </>
    );
  }

  return renderOutput();
};
// className="btn btn--orange"
export default HostVans;

/*
<div className="host-vans__item-img-box">
                    <img className="host-vans__img van__img" src={imageUrl} width="" height="" alt={`Image of ${name}`}/>
                  </div>
                  <div className="host-vans__item-info">
                    <p className="host-vans__item-name">{name}</p>
                    <p className="host-vans__item-price">{price}</p>
                  </div>
                  <button type="button" className="host-vans__edit-btn underlined">Edit</button>
*/
