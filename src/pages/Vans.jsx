import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from "react-router-dom";
import axios from 'axios';

const Vans = () => {
  const [vansList, setVansList] = useState([]); 
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const searchNative = new URLSearchParams(document.location.search);
  console.log('NATIVE', searchNative)

  console.log('SEARCHPARAMS', searchParams);

  const typeFilters = new Set(searchNative.getAll('type')); // new Set(searchParams.getAll('type'));
  console.log('TYPEFILTERS', typeFilters);

  const vansToDisplay = typeFilters.size === 0 ? vansList : vansList.filter((el) => typeFilters.has(el.type));

  const setFilter = (key, val, clearAll) => {
    const currentURLSearchParams = new URLSearchParams(searchNative.toString());
    console.log('currentURLSearchParams', currentURLSearchParams)
    if (clearAll) {
      currentURLSearchParams.delete(key);
      // searchParams.delete(key);
      // setSearchParams(searchParams);
      // setSearchParams(`?${searchParams.toString()}`);
      setSearchParams(`?${currentURLSearchParams.toString()}`);
      return;
    }
    if (typeFilters.has(val)) {
      console.log('typeFilters.has(val)',typeFilters.has(val))
      currentURLSearchParams.delete(key, val);
      setSearchParams(`?${currentURLSearchParams.toString()}`);
      // searchParams.delete(key, val);
      // setSearchParams(searchParams);
      // setSearchParams(`?${searchParams.toString()}`);
      return;
    }
    currentURLSearchParams.append(key, val);
    setSearchParams(`?${currentURLSearchParams.toString()}`);
    // searchParams.append(key, val);
    // setSearchParams(searchParams);
    // setSearchParams(`?${searchParams.toString()}`);
  };

  const generateSearchParamString = (key, val, clearAll) => {
    if (val === null) {
      clearAll ? searchParams.delete(key) : searchParams.delete(key, val);
      return `?${searchParams.toString()}`;
    }
    searchParams.append(key, val);
    return `?${searchParams.toString()}`;
  }

  const isFilterOn = (key, val) => {};

  
  useEffect(() => {
    axios.get("/api/vans")
      .then(({data}) => {
        setVansList(data.vans);
      })
      .catch((e) => setError(e))
  }, []);

  return (
    <main className="vans">
      <div className="center">
        <h1 className="vans__title title">Explore our van options</h1>
        <Link to={generateSearchParamString('type', 'simple')} className="vans__filter-link">Simple</Link>
        <Link to={generateSearchParamString('type', 'rugged')} className="vans__filter-link">Rugged</Link>
        <Link to={generateSearchParamString('type', 'luxury')} className="vans__filter-link">Luxury</Link>
        <Link to={generateSearchParamString('type', null, true)} className="vans__filter-link">Clear</Link>
        <div className="vans__filter vans-filter">
          <div className="vans-filter__checkboxes">
            <div className="vans-filter__checkbox">
              <input
                className="vans-filter__checkbox-input visually-hidden"
                type="checkbox"
                id="simple-vans"
                name="simple"
                value="simple"
                onChange={(e) => setFilter('type', e.target.name)}
                checked={typeFilters.has('simple')}
              />
              <label className="vans-filter__checkbox-label vans-filter__checkbox-label--simple" htmlFor="simple-vans">Simple</label>
            </div>
            <div className="vans-filter__checkbox">
              <input
                className="vans-filter__checkbox-input visually-hidden"
                type="checkbox"
                id="luxury-vans"
                name="luxury"
                value="luxury"
                onChange={(e) => {
                  setFilter('type', e.target.name)
                }}
                checked={typeFilters.has('luxury')}
              />
              <label className="vans-filter__checkbox-label vans-filter__checkbox-label--luxury" htmlFor="luxury-vans">Luxury</label>
            </div>
            <div className="vans-filter__checkbox">
              <input
                className="vans-filter__checkbox-input visually-hidden"
                type="checkbox"
                id="rugged-vans"
                name="rugged"
                value="rugged"
                onChange={(e) => setFilter('type', e.target.name)}
                checked={typeFilters.has('rugged')}
              />
              <label className="vans-filter__checkbox-label vans-filter__checkbox-label--rugged" htmlFor="rugged-vans">Rugged</label>
            </div>
          </div>
          <button
            className="vans-filter__reset-btn underlined"
            type="button"
            onClick={() => setFilter('type', null, true)}
          >
            Clear filters
          </button>
        </div>
        <div className="vans__list">
          <ul className="vans-list">
            {vansToDisplay.map((van) => {
              const { id, name, price, type, description, imageUrl } = van;
              return (
                <li className="vans-list__item" key={id}>
                  <Link
                    className={`vans-list__wrap-link vans-list__wrap-link--${id%2}`}
                    to={id}
                    aria-label={`View details for ${name}, priced at $${price} per day`}
                  >
                    <div className="vans-list__img-box">
                      <img className="vans-list__img van__img" src={imageUrl} width="" height="" alt={`Image of ${name}`} />
                    </div>
                    <div className="vans-list__wrap">
                      <div className="vans-list__item-info">
                        <span className="vans-list__item-title">{name}</span>
                        <span className="vans-list__item-price">
                          {`$${price}`}
                          <span>/day</span>
                        </span>
                      </div>
                      <span className={`btn link-button vans-list__item-btn van-type van-type--${type}`}>{`${type[0].toUpperCase()}${type.substring(1)}`}</span>
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

// Original filters to filter vans by type with use of Link:
/*
  <Link to="?type=simple" className="vans__filter-link">Simple</Link>
  <Link to="?type=rugged" className="vans__filter-link">Rugged</Link>
  <Link to="?type=luxury" className="vans__filter-link">Luxury</Link>
  <Link to="." className="vans__filter-link">Clear</Link>
*/

// onChange={(e) => setFilter(generateSearchParamString('type', 'simple'))}
