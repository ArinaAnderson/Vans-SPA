import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

const Vans = () => {
  /*
  const vansList = [
    { id: "1", name: "Modest Explorer", price: 60, description: "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png", type: "simple" },
    { id: "2", name: "Beach Bum", price: 80, description: "Beach Bum is a van inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/beach-bum.png", type: "rugged" },
    { id: "3", name: "Beach Bum", price: 80, description: "Beach Bum is a van inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/beach-bum.png", type: "rugged" },
  ];
  */

  const [vansList, setVansList] = useState([]); 
  const [error, setError] = useState(null);
  
  useEffect(() => {
    axios.get("/api/vans")
      .then(({data}) => setVansList(data.vans))
      .catch((e) => setError(e))
  }, [])
  
  return (
    <main className="vans">
      <div className="center">
        <h1 className="vans__title title">Explore our van options</h1>
        <div className="vans__filter vans-filter">
          <div className="vans-filter__checkboxes">
            <div className="vans-filter__checkbox">
              <input className="vans-filter__checkbox-input visually-hidden" type="checkbox" id="simple-vans" value="simple" />
              <label className="vans-filter__checkbox-label" htmlFor="simple-vans">Simple</label>
            </div>
            <div className="vans-filter__checkbox">
              <input className="vans-filter__checkbox-input visually-hidden" type="checkbox" id="luxury-vans" value="luxury" />
              <label className="vans-filter__checkbox-label" htmlFor="luxury-vans">Luxury</label>
            </div>
            <div className="vans-filter__checkbox">
              <input className="vans-filter__checkbox-input visually-hidden" type="checkbox" id="rugged-vans" value="rugged" />
              <label className="vans-filter__checkbox-label" htmlFor="rugged-vans">Rugged</label>
            </div>
          </div>
          <button className="vans-filter__reset-btn underlined" type="button">Clear filters</button>
        </div>
        <div className="vans__list">
          <ul className="vans-list">
            {vansList.map((van) => {
              const { id, name, price, type, description, imageUrl } = van;
              return (
                <li className="vans-list__item" key={id}>
                  <Link
                    className={`vans-list__wrap-link vans-list__wrap-link--${id%2}`}
                    to={`/vans/${id}`}
                    aria-label={`View details for ${name}, priced at $${price} per day`}
                  >
                    <div className="vans-list__img-box">
                      <img className="vans-list__img" src={imageUrl} width="" height="" alt={`Image of ${name}`}/>
                    </div>
                    <div className="vans-list__wrap">
                      <div className="vans-list__item-info">
                        <span className="vans-list__item-title">{name}</span>
                        <span className="vans-list__item-price">
                          {`$${price}`}
                          <span>/day</span>
                        </span>
                      </div>
                      <span className={`link-button vans-list__item-btn vans-list__item-btn--${type}`} to={`/vans/${id}`}>{`${type[0].toUpperCase()}${type.substring(1)}`}</span>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </main>
    
  );
};
// className="btn btn--orange"
export default Vans;

// <Link className="link-button" to="/vans">Find your van</Link>

//                       <Link className={`link-button vans-list__item-btn vans-list__item-btn--${type}`} to={`/vans/${id}`}>{`${type[0].toUpperCase()}${type.substring(1)}`}</Link>

