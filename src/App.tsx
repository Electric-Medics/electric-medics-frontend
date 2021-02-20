import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from '@material-ui/core';
import './App.css';

import About from './views/About';
import Careers from './views/Careers';
import Home from './views/Home';
import MenuBar from './components/MenuBar';
import Reviews from './views/Reviews';
import Services from './views/Services';
import Showroom from './views/Showroom';

const App = () => {
  return (
    <Router>
      <Container maxWidth={false}>
        <MenuBar />
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/services' component={Services} />
        <Route exact path='/reviews' component={Reviews} />
        <Route exact path='/showroom' component={Showroom} />
        <Route exact path='/careers' component={Careers} />
      </Container>
    </Router>
  );
};

export default App;
