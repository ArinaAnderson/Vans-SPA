import React, { useState, useEffect } from 'react';
import { Link, useSearchParams, useLoaderData } from "react-router-dom";

import getRequest from '../../api.js';

export const loader = () => getRequest("/api/vans");

const Vans = ({ setCurrentVan }) => {
  const [error, setError] = useState(null);
  const [requestStatus, setRequestStatus] = useState('idle');
  const [searchParams, setSearchParams] = useSearchParams();
  const searchParamsNative = new URLSearchParams(document.location.search);


  const data = useLoaderData();
  console.log('DATA DATA.VANS', data, data.vans);

  const typeFilters = new Set(searchParamsNative.getAll('type')); // new Set(searchParams.getAll('type'));

  const setFilter = (key, val, clearAll) => {
    const currentURLSearchParams = new URLSearchParams(searchParamsNative.toString());
    if (clearAll) {
      currentURLSearchParams.delete(key);
      setSearchParams(`?${currentURLSearchParams.toString()}`);
      return;
    }
    if (typeFilters.has(val)) {
      currentURLSearchParams.delete(key, val);
      setSearchParams(`?${currentURLSearchParams.toString()}`);
      return;
    }
    currentURLSearchParams.append(key, val);
    setSearchParams(`?${currentURLSearchParams.toString()}`);
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

  const normalizeLinkStateVal = (searchValStr) => searchValStr.length > 0 ? `?${searchValStr}` : '';
  /*
  useEffect(() => {
    if (allVans) {
      return;
    }

    setError(null);
    setRequestStatus('loading');

    const downloadVans = async (url) => {
      try {
        const allVansData = await getRequest(url);
        setRequestStatus('success');
        setAllVans(allVansData.vans);
      } catch(e) {
        console.log('ERROR', e.message)
        setRequestStatus('failure');
        setError('failed to fetch data');
        // setError(e.message);
        setRequestStatus('failure');
      }
    };
    downloadVans("/api/vans");
  }, []);
  */
  const renderOutput = () => {
    /*
    if (requestStatus === 'failure') {
      console.log('FAILURE')
      return <h2>{`Error: ${error}, please, try again...`}</h2>; 
    }
    if (requestStatus === 'loading') {
      return (<h2>Loading...</h2>);
    } // remove
  
    if (allVans === null) {
      console.log('HERE!!')
      return (<h2>Loading...</h2>);
    } // remove
    */
    
    if (data.length === 0) {// if (allVans.length === 0) {
      console.log('EMPTY ARR')
      return (<h2>No vans to show...</h2>);
    }

    // const vansToDisplay = typeFilters.size === 0 ? allVans : allVans.filter((el) => typeFilters.has(el.type));
    const vansToDisplay = typeFilters.size === 0 ? data : data.filter((el) => typeFilters.has(el.type));
    return (
      <>
        <h1 className="vans__title title">Explore our van options</h1>
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
                    state={{
                      search: normalizeLinkStateVal(searchParamsNative.toString()),
                      typeFilters: Array.from(typeFilters),
                    }}
                    aria-label={`View details for ${name}, priced at $${price} per day`}
                    // onClick={() => setCurrentVan(van)}
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
      </>
    );
  }

  return (
    <main className="vans">
        <div className="center">
          {renderOutput()}
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
