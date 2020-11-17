import React, { Component } from "react";
import NavMenu from "../components/NavComponent/NavMenu";
import Home from "../components/HomeComponent/Home";
import Work from "../components/WorksComponent/Work";
import About from "../components/AboutComponent/About";
import Contact from "../components/ContactComponent/Contact";

import NavHighResolution from "../components/NavComponent/NavHighResolution";
import HomeHighResolution from "../components/HomeComponent/HomeHighResolution";
import WorkHighResolution from "../components/WorksComponent/WorkHighResolution";
import AboutHighResolution from "../components/AboutComponent/AboutHighResolution";
import ContactHighResolution from "../components/ContactComponent/ContactHighResolution";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

/*
TODO: refactor scss variables and classes ;) - DONE!
*/

export default class App extends Component {
  render() {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    console.log(screenWidth);
    console.log(screenHeight);

    if (screenWidth < 1024) {
      return (
        <div className="dev-landing-page">
          <NavMenu />
          <Home />
          <Work />
          <About />
          <Contact />
        </div>
      );
    } else {
      return (
        <Router>
          <>
            <NavHighResolution />
            <div className="back-container"></div>
            <div className="dev-landing-page">
              <Switch location={location} key={location.pathname}>
                <Route exact path={`/`} component={HomeHighResolution} />
                <Route
                  exact
                  path={`/contact`}
                  component={ContactHighResolution}
                />
                <Route exact path={`/about`} component={AboutHighResolution} />
                <Route exact path={`/works`} component={WorkHighResolution} />
              </Switch>
            </div>
          </>
        </Router>
      );
    }
  }
}
