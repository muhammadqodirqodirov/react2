import React from 'react';
import { Container } from '../components/UI';
import logo from "../assets/digital_ocean.svg";
import facebook from "../assets/Facebook.svg";
import twitter from "../assets/Twiter.svg";
import youtube from "../assets/youtube.svg";
import instagram from "../assets/instagram.svg";

export const Footer = () => {
  return (
<div>
  <div>
    <Container>
    <div className="container footer__container">
      <ul className="footer__list">
        <li className="footer__item">
          <a className="footer__img" href="#">
            <img src={logo} alt="logo" />
          </a>
          <p className="footer__text">Smart business</p>
          <p className="footer__text">Community</p>
        </li>
        <li className="footer__item">
          <h3 className="footer__titl1">Resources</h3>
          <p className="footer__text2">Start Business</p>
          <p className="footer__text2">Digital Marketing</p>
          <p className="footer__text2">Course Creation</p>
          <p className="footer__text2">Business Accelerator</p>
        </li>
        <li className="footer__item">
          <h3 className="footer__title2">Mission</h3>
          <p className="footer__text3">About Digital Analyst</p>
          <p className="footer__text3">Team</p>
          <p className="footer__text3">Become a Partner</p>
          <p className="footer__text3">Privacy Policy</p>
        </li>
        <li className="footer__item">
          <h3 className="footer__title3">Contact</h3>
          <p className="footer__text3">
            <a href="#" className="footer__link">041-774073</a>
            <a href="#" className="footer__link">hello@digitalanalyst.org</a>
            <a href="#" className="footer__link">Contact Form</a>
          </p>
        </li>
      </ul>
    </div>
    </Container>
  </div>
  <div id="footer__end">
    <Container>
    <div className="container footer__end-container">
      <p className="footer__end-text">
        © 2021  
        <a className="footer__end-limk" href="#">DigitalAnalyst.org.</a> 
        A 50 non-profit organization. EIN: -3410655
      </p>
      <ul className="footer__end-list">
        <li className="footer__end-item">
          <a className="footer__end-link1" href="#">
            <img src={facebook} alt="facebook" />
          </a>
        </li>
        <li className="footer__end-item">
          <a className="footer__end-link2" href="#">
            <img src={twitter} alt="itwitter" />
          </a>
        </li>
        <li className="footer__end-item">
          <a className="footer__end-link" href="#">
            <img src={youtube} alt="youtube" />
          </a>
        </li>
        <li className="footer__end-item">
          <a className="footer__end-link4" href="#">
            <img src={instagram} alt="instagram" />
          </a>
        </li>
      </ul>
      <form method="post">
        <button className="footer__end-btn2">
          Sign Up
        </button>
      </form>
    </div>
    </Container>
  </div>
</div>

  )
}
