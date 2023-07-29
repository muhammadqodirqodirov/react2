import React from "react";
import { Container } from "../../components/UI";

export const User =()=>{
  return <>
  <section id="section-user">
    <Container>
    <div className="container section-user__container">
      <div className="section-user__top">
        <h2 className="section-user__title">
          What Our Customers are Saying.
        </h2>
        <div className="section-user__btnn">
          <form method="post">
            <button className="section-user__btn" type="button" />
          </form>
          <form method="post">
            <button className="section-user__btn1" type="button" />
          </form>
        </div>
      </div>
      <div className="section-user__down">
        <div className="section-user__human1">
          <span className="section-user__line" />
          <div className="section-user__content">
            <p className="section-user__text">
              I recently concluded a 
              complete messaging revamp for an exciting com
            </p>
            <p className="section-user__name">
              <span className="section-user__name-line" />
              Leo Aminoff
            </p>
            <p className="section-user__desiner">
              Product Designer
            </p>
          </div>
        </div>
        <div className="section-user__human2">
          <span className="section-user__line2" />
          <div className="section-user__content2">
            <p className="section-user__text2">
              I recently concluded a complete 
              messaging revamp for an excitin company 
            </p>
            <p className="section-user__name2">
              <span className="section-user__name-line2" />
              Carla Dias
            </p>
            <p className="section-user__desiner2">
              Product Designer
            </p>
          </div>
        </div>
      </div>
    </div>
    </Container>
  </section>
  </>  
}