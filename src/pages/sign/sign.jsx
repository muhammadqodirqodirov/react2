import React from "react";
import { Container } from "../../components/UI";
import second from "../../assets/secondimg.svg"

export const Sign = () =>{
    return<>
    <section id="section-about">
    <Container>
    <div className="container section-about__container">
      <div className="section-about__img">
        <img src={second} />
      </div>
      <div className="smart-about__content">
        <p className="section-about__us">About us</p>
        <h2 className="section-about__title">Platform Dedicated To Promoting </h2>
        <p className="section-about__lorem">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum sagittis ultrices  consectetur adipiscing elit.
          fringilla quisque pulvinar..
        </p>
        <form method="post">
          <button className="section-about__btn" type="button">
            What we do? 
          </button>
        </form>
      </div>
    </div>
    </Container>
  </section>
    </>
}