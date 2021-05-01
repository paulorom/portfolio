import React from "react";
import Navbar from "./../Navbar";
import Main from "./../Main";
import Plans from "./../Plans";
import Experiences from "./../Experiences";
import AOS from "aos";

import "aos/dist/aos.css";
import "./styles.scss";

class App extends React.Component {
  componentDidMount() {
    AOS.init({
      duration: 2000
    });
  }

  render() {
    return (
      <>
        <Navbar />
        <Main />
        <Plans />
        <Experiences />
      </>
    );
  }
}
export default App;
