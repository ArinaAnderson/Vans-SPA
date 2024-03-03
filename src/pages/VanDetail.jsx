import React, { useState, useEffect} from 'react';
import { Link, useParams } from "react-router-dom";
import axios from 'axios';

const Vans = () => {
  const [vanData, setVanData] = useState(null); 
  const [error, setError] = useState(null);
  // const [requestStatus, setRequestStatus]

  const params = useParams();

  useEffect(() => {
    axios.get(`/api/vans/${params.id}`)
      .then((response) => response.data)
      .then((payload) => setVanData(payload.vans))
      .then(() => console.log(vanData))
      .catch((e) => setError(e))
  }, [params.id]);

  const renderOutput = () => {
    if (vanData === null) {
      return (<h2>Loading...</h2>);
    }
    const { type, name, id, imageUrl, description, price } = vanData;

    return (
      <main className="van">
        <div className="center">
          <Link className="van__back-link underlined" to='/vans'>Back to all vans</Link>
          <div className="van__wrap">
            <div className="van__img-box">
              <img className="van__img"  src={imageUrl} width="" height="" alt={`Image of ${name}`}/>
            </div>
            <div className="van__info-wrap">
              <span className={`btn van-type van-type--${type}`}>
                {`${vanData.type[0].toUpperCase()}${vanData.type.substring(1)}`}
              </span>
              <h2 className="van__title">{name}</h2>
              <p className="van__price-box"><span className="van__price">{`$${price}`}</span>/day</p>
            </div>
          </div>
          <p className="van__description">{description}</p>
          <Link className="link-button btn van__rent-link">Rent this van</Link>
        </div>
      </main>
    );
  }

  return renderOutput();
};
// className="btn btn--orange"
export default Vans;

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


