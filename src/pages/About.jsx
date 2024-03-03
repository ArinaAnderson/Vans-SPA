import React from 'react';
import bgImg from "../../assets/images/about-hero.png"
import { Link } from "react-router-dom"

const About = () => {
  return (
    <main className="about-content">
      <div className="center">
        <div className="about-content__img-box">
          <img src={bgImg} className="about-content__img" />
        </div>
        <h1 className="about-content__title title">You got the travel plans, we got the travel vans</h1>
        <p className="about-content__text">
          Our mission is to enliven your road trip with the perfect travel van rental.
          Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)
        </p>
        <p className="about-content__text">
          Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
        </p>
        <div className="promo-block">
          <p className="promo-block__text">Your destination is waiting.</p>
          <p className="promo-block__text">Your van is ready.</p>
          <Link className="btn link-button" to="/vans">
            Explore our vans
          </Link>
        </div>
      </div>
    </main>
    
  );
};

export default About;

