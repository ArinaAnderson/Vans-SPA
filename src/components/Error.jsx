import React from 'react';
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log('useRouteError',error);
  return (
    <main className="error404">
      <div className="center">
        <h1 aria-live="assertive" className="title">{error.message}...Meow-meow, sorry...</h1>
        <Link to="/" className="btn link-button">Return to home</Link>
      </div>
    </main>
  );
};
// className="btn btn--orange"
export default Error;

// Original filters to filter vans by type with use of Link:
/*
  <Link to="?type=simple" className="vans__filter-link">Simple</Link>
  <Link to="?type=rugged" className="vans__filter-link">Rugged</Link>
  <Link to="?type=luxury" className="vans__filter-link">Luxury</Link>
  <Link to="." className="vans__filter-link">Clear</Link>
*/

// onChange={(e) => setFilter(generateSearchParamString('type', 'simple'))}
