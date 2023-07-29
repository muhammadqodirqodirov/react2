import React from "react";
import { Container } from "../../components/UI";

export const End =()=>{
    return <>
      <section id="section-sign">
   <Container>
   <div className="container section-sign__container">
      <h2 className="section-sign__title">
        Sign Up to Our Newsletter
      </h2>
      <p className="section-sign__text">
        Yours could be one of them.
      </p>
      <form className="section-sign__form" method="post">
        <input className="section-sign__input" type="email" id="email" placeholder="Enter your email" aria-label="email" name="email" />
        <button className="section-sign__btn">
          Send
        </button>
      </form>
    </div>
   </Container>
  </section>
    </>
}