import React from 'react';
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <main className="home-content">
      <div className="center">
        <h1 className="home-content__title">You got the travel plans, we got the travel vans</h1>
        <p className="home-content__text">
          Add adventure to your life by joining the #vanlife movement.
          Rent the perfect van to make your perfect road trip.
        </p>
        <Link className="btn link-button" to="/vans">Find your van</Link>
      </div>
    </main>
    
  );
};
// className="btn btn--orange"
export default Home;

