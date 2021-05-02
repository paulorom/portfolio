import React from "react";
import Scrollchor from "react-scrollchor";

import "./styles.scss";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll() {
    this.setState({ scroll: window.scrollY });
  }

  componentDidUpdate() {
    this.state.scroll > this.state.top
      ? (document.body.style.paddingTop = `${this.state.height}px`)
      : (document.body.style.paddingTop = 0);
  }

  componentDidMount() {
    const el = document.querySelector("nav");
    this.setState({ top: el.offsetTop, height: el.offsetHeight });
    window.addEventListener("scroll", this.handleScroll);

    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll(".navbar-burger"),
      0
    );
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach(el => {
        el.addEventListener("click", () => {
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle("is-active");
          $target.classList.toggle("is-active");
        });
      });
    }
  }

  render() {
    return (
      <nav
        className={
          this.state.scroll > this.state.top ? "navbar fixed-nav" : "navbar"
        }
        role="navigation"
        aria-label="main navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Scrollchor to="" className="navbar-item">
              <span>p</span>m
            </Scrollchor>
          </div>

          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              <Scrollchor to="#Plans" className="navbar-item">
                Skills
              </Scrollchor>

              <Scrollchor to="#Experiences" className="navbar-item">
                Experience
              </Scrollchor>
            </div>
            <div className="navbar-end">
              <a
                target="_blank"
                rel="noopener noreferrer" 
                href="https://wa.me/5591981976107?text=Oi%20Paulo!%20Gostaria%20de%20conversar%20sobre%20..."
                className="navbar-item"
              >
                <span className="register call-button">WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
