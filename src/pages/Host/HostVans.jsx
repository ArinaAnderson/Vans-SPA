import React, { useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

const HostVans = ({ currentHostVans, setCurrentVan, setCurrentHostVans }) => {
  // const [hostVans, setHostVans] = useState(null);
  const [error, setError] = useState(null);
  const [requetStatus, setRequestStatus] = useState('idle');

  useEffect(() => {
    if (currentHostVans) {
      return;
    }
    setError(null);
    setRequestStatus('loading');
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
  }, []);

  const renderOutput = () => {
    if (currentHostVans === null && requetStatus === 'success') {
      return <h1 className="host-vans__subtitle">You don't host any vans yet...</h1>
    }
    if (currentHostVans === null || requetStatus === 'loading') {
      return (<h2>Loading...</h2>);
    }
    if (requetStatus === 'failure') {
      return <h2>{`Error ${error.message}, please, try again...`}</h2>; 
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
                  to={`${id}`}
                  onClick={() => setCurrentVan(van)}
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
