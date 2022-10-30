import React, { useState } from "react";
import Topbar from "./Components/topBars/Topbar";
import Intro from "./Components/intro/Intro";
import Portfolio from "./Components/portfolio/Portfolio";
import Works from "./Components/works/Works";
import Testimonials from "./Components/testimonials/Testimonials";
import Contact from "./Components/contact/Contact";
import "./app.scss";
import Menu from "./Components/menu/Menu";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="App">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Router>
          <Switch>
            <Route exact path="/">
              <Intro />
              <Portfolio />
              <Works />
              <Testimonials />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
          </Switch>
        </Router>
        {/* <Contact /> */}
      </div>
    </div>
  );
}

export default App;
