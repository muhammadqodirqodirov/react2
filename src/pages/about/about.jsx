import React from "react";
import { Container } from "../../components/UI";
import first from "../../assets/first_img.png"
export const About = () =>{
return <>
    <section id="smart-section">
      <Container>
      <div className="container smart-secton__container">
        <div className="smart-section__content">
          <p className="smart-section__textup">
            Smart Business
          </p>
          <h1 className="smart-section__our">
            Connecting people is our 
            <span className="smart-section__our2">
              business
            </span>
          </h1>
          <p className="smart-section__textdown">
            As a rule the organization settles on the inventive and media choices.
            Regularly it supplies supporting statistical.
          </p>
          <div className="smart-section__btn-block">
            <form method="post">
              <button className="smart-section__btn" type="button">
                Get Started 
              </button>
            </form>
            <form method="post">
              <button className="smart-section__but" type="button">
                Play Video
              </button>
            </form>
          </div>
        </div>
        <div className="smart-section__img">
          <img src={first} alt="As a rule the organization settles on the inventive and media choices. Regularly it supplies supporting statistical." />
        </div>
      </div>
      </Container>
    </section>
</>
}