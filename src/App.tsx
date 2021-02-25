import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "@material-ui/core";
import "./App.css";

import MenuBar from "./components/MenuBar";

import About from "./views/About";
import Home from "./views/Home/Home";
import Reviews from "./views/Reviews";
import Services from "./views/Services";
import Showroom from "./views/Showroom";

const App = () => {
  return (
    <Router>
      <Container maxWidth="xl">
        <MenuBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/reviews" component={Reviews} />
        <Route exact path="/showroom" component={Showroom} />
      </Container>
    </Router>
  );
};

export default App;
