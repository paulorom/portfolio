import React from "react";
import Slider from "./slider";
import "react-id-swiper/src/styles/scss/swiper.scss";
import "./styles.scss";

function Planos(props) {
  return (
    <section id="Plans" className="PricingTable section">
      <div className="container">
        <div className="column is-full-mobile is-full-tablet is-12-desktop is-12-widescreen is-12-fullhd">
          <h1>Skills</h1>
        </div>
      </div>

      <div className="container container-slider">
        <Slider />
      </div>
    </section>
  );
}

export default Planos;
