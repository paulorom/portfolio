import React from "react";

import "./styles.scss";

function Features(props) {
  return (
    <div className="container">
      <div className="Features">
        {props.items.map((item, index) => (
          <div
            key={item.id.toString()}
            className="Feature columns is-variable is-10 is-vcentered has-text-centered-mobile"
          >
            <div
              className="column is-6"
              data-aos="fade-top"
              data-aos-once="true"
            >
              <h3 className="Feature-title title has-text-weight-bold is-spaced is-3">
                {item.company}
              </h3>
              <h4 className="Feature-title title has-text-weight-bold is-spaced is-4">
                {item.title}
              </h4>
              <h5 className="Feature-title title has-text-weight-bold is-spaced is-5">
                {item.date}
              </h5>
              <p className="subtitle">{item.description}</p>
            </div>
            <div
              className="column column is-6"
              data-aos="fade-top"
              data-aos-once="true"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
