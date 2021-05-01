import React from "react";
import Portfolio from "./../Portfolio";

import "./styles.scss";

function Contest() {
  return (
    <section id="Contest" className="Contest section">
      <div className="container has-text-centered">
        <div className="columns is-multiline is-centered">
          <div className="column is-8 is-10-widescreen">
            <Portfolio />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contest;
