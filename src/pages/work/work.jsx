import React from "react";
import { Container } from "../../components/UI";

export const Work =()=>{
    return <>
     <section id="section-work">
    <Container>
    <div className="container section-work__container">
      <h2 className="section-work__title">
        How We Work
      </h2>
      <ul className="section-work__list">
        <li className="section-work__item">
          <h3 className="section-work__title1">Start Design </h3>
          <p className="section-work__text1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Viverra suscipit adipiscing elit.
          </p>
        </li>
        <li className="section-work__item2">
          <h3 className="section-work__title2">Go to Code</h3>
          <p className="section-work__text2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Viverra suscipit adipiscing elit.
          </p>
        </li>
        <li className="section-work__item3">
          <h3 className="section-work__title3">Final Deliverd</h3>
          <p className="section-work__text3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Viverra suscipit adipiscing elit.
          </p>
        </li>
      </ul>
    </div>
    </Container>
  </section>
    </>
}