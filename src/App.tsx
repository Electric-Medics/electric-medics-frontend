import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import About from './components/About';
import Home from './components/Home';
import Reviews from './components/Reviews';
import Services from './components/Services';
import Showroom from './components/Showroom';

const App = () => {
  return (
    <Router>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/services' component={Services} />
      <Route exact path='/reviews' component={Reviews} />
      <Route exact path='/showroom' component={Showroom} />
    </Router>
  );
};

export default App;
