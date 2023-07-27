import React from 'react';
import logo from '../assets/digital_ocean.svg';
import { Container } from '../components/UI';
export const Header = () => {
  return (
    <Container> 
  <div className="container main-ocean__container">
    <a href="#" className="main-ocean__logo">
      <img className="main-ocean__img" src={logo} />
    </a>
    <nav>
      <ul className="main-ocean__list">
        <li className="main-ocean__item">
          <p className="main-ocean__item-text active">Home</p>
        </li>
        <li className="main-ocean__item main-ocean__item2">About </li>
        <li className="main-ocean__item">Services</li>
        <li className="main-ocean__item ">Reviews</li>
      </ul>
    </nav>
    <form method="post">
      <button className="main-ocean__btn" type="button">
        Get Started
      </button>
    </form>
  </div>
    </Container>

  );
}
