import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import About from './views/About';
import Careers from './views/Careers';
import FadeInSection from './components/FadeInSection/FadeInSection';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './views/Home';
import MenuBar from './components/MenuBar/MenuBar';
import Reviews from './views/Reviews';
import Services from './views/Services';
import Showroom from './views/Showroom';

const App = () => {
  return (
    <Router>
      <div className='contianer-fluid' style={{ padding: 0, margin: 0 }}>
        <Header />
        <MenuBar />
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/services' component={Services} />
        <Route path='/reviews' component={Reviews} />
        <Route path='/showroom' component={Showroom} />
        <Route path='/careers' component={Careers} />
        <FadeInSection />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
