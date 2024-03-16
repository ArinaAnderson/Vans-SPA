import React, { useState, useEffect} from 'react';
import { Link, useParams, useLocation } from "react-router-dom";
import axios from 'axios';
import { buildString } from '../utils/utils.js';

const VanDetail = ({ currentVan, setCurrentVan}) => {
  // const [vanData, setVanData] = useState(null); 
  const [error, setError] = useState(null);
  const [requetStatus, setRequestStatus] = useState('idle');

  const location = useLocation();
  const isLocationStateSet = (location) => location.state !== null;
  console.log('FENYA', location.state, location.state !== null);
  const backLinkStateSearch = isLocationStateSet(location) ? location.state.search : '';
  const backLinkTextVariable = isLocationStateSet(location) ? buildString(location.state.typeFilters) : '';
  const backLinkText = `Back to ${backLinkTextVariable.length > 0 ? backLinkTextVariable : 'all'} vans`;
  /*
  const currentURLSearchParams = new URLSearchParams(backLinkStateSearch);
  const currentTypeFilters = currentURLSearchParams.getAll('type');
  const backLinkText = `Back to ${currentTypeFilters.length > 0 ? convertArrToStr(currentTypeFilters) : 'all'} vans`;
  */

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
        setCurrentVan(payload.vans);
      })
      .catch((e) => {
        setRequestStatus('failure');
        setError(e);
      })
  }, [params.id]);

  const renderOutput = () => {
    if (requetStatus === 'loading') {
      return (<h2>Loading...</h2>);
    }
    if (requetStatus === 'failure') {
      return <h2>{`Error ${error.message}, please, try again...`}</h2>; 
    }
    if (currentVan === null) {
      return (<h2>Loading...</h2>);
    }
    const { type, name, id, imageUrl, description, price } = currentVan;

    return (
      <>
        <Link
          className="van__back-link underlined"
          to={`..${backLinkStateSearch}`} relative="path"
        >
          {backLinkText}
        </Link>
        <div className="van__wrap">
          <div className="van__img-box">
            <img className="van__img"  src={imageUrl} width="" height="" alt={`Image of ${name}`}/>
          </div>
          <div className="van__info-wrap">
            <span className={`btn van-type van-type--${type}`}>
              {`${type[0].toUpperCase()}${type.substring(1)}`}
            </span>
            <h2 className="van__title">{name}</h2>
            <p className="van__price-box"><span className="van__price">{`$${price}`}</span>/day</p>
          </div>
        </div>
        <p className="van__description">{description}</p>
        <Link className="link-button btn van__rent-link">Rent this van</Link>
      </>
    );
  }

  return (
    <main className="van">
        <div className="center">
          {renderOutput()}
        </div>
    </main>
  );
};
// className="btn btn--orange"
export default VanDetail;

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


