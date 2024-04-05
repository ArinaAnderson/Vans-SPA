import React, { useState, useEffect} from 'react';
import { Link, useParams, useLocation, useLoaderData } from "react-router-dom";
import axios from 'axios';
import { buildString } from '../utils/utils.js';
import getRequest from '../../api.js';

// export const loader = async ({params}) => await getRequest(`/api/vans/${params.id}`);
export function loader({ params }) {
  return getRequest(`/api/vans/${params.id}`)
}

const VanDetail = () => { // ({ currentVan, setCurrentVan}) => {
  // const [vanData, setVanData] = useState(null); 
  const [error, setError] = useState(null);
  const [requestStatus, setRequestStatus] = useState('idle');

  const currentVan = useLoaderData();
  console.log('TOBBY!!!', currentVan);

  const location = useLocation();
  const isLocationStateSet = (location) => location.state !== null;
  const backLinkStateSearch = isLocationStateSet(location) ? location.state.search : '';
  const backLinkTextVariable = isLocationStateSet(location) ? buildString(location.state.typeFilters) : '';
  const backLinkText = `Back to ${backLinkTextVariable.length > 0 ? backLinkTextVariable : 'all'} vans`;

  /*
  const params = useParams();

  useEffect(() => {
    if (currentVan) {
      return;
    }

    setError(null);
    setRequestStatus('loading');
    const downloadVan = async (url) => {
      try {
        const vanData = await getRequest(url);
        console.log('SPIRAL', vanData);
        setRequestStatus('success');
        if (vanData === null) {
          setCurrentVan(null);
        } else {
          setCurrentVan(vanData.vans);
        }
        // setCurrentVan(vanData.vans);
      } catch(e) {
        setError('failed to fetch data');
        setRequestStatus('failure');
      }
    };
    downloadVan(`/api/vans/${params.id}`);

    // axios.get(`/api/vans/${params.id}`)
      // .then((response) => response.data)
      // .then((payload) => {
      //  setRequestStatus('success');
      //  setCurrentVan(payload.vans);
      //  })
      // .catch((e) => {
      //  setRequestStatus('failure');
      //  setError(e);
      //  })
  }, [params.id]);
  */

  const renderOutput = () => {
    if (requestStatus === 'loading') {
      return (<h2 aria-live="polite">Loading...</h2>);
    }
    if (requestStatus === 'failure') {
      return <h2 aria-live="assertive">{`Error: ${error}...`}</h2>; 
    }
    if (currentVan === null && requestStatus === 'idle') {
      return (<h2 aria-live="polite">Loading...</h2>);
    }
    if (currentVan === null && requestStatus === 'success') {
      return (<h2 aria-live="polite">No data to show</h2>);
    }
    if (currentVan === null) {
      return (<h2 aria-live="polite">NO SUCH A VAN No data to show</h2>);
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


