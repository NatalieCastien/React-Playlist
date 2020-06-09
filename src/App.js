import React from "react";
import Container from "./Container";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./About";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Header />
      <div className="main">
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Container />
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
