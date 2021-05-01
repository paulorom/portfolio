import React from "react";

export default ({ plano, investimento, bonus, image, whatsApp }) => (
  <div className="swiper-slide pricing-plan">
    <img className="pricing-image" src={image} alt="{plano}" />
    <h2 className="pricing-header">{plano}</h2>

    <ul className="pricing-features">
      <li className="pricing-features-item">
        <span className="pricing-price aplicacao-minima">{bonus}</span>
        Experiência
      </li>
    </ul>
  </div>
);
