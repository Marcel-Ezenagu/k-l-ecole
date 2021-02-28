import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from './components/Navigation';
import Footer from './components/Footer';

import IconLayer from './components/IconLayer';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './components/Services';
import Projects from './components/Projects';
function App() {
 
 
  return (
    <Router>
      <div className='page-content'>
        <div className='content-wrapper'>

       
            
            <Navigation/>
            <Home />
            <Services />

            <About />
            <Projects />
          
            <Contact />
        </div>
          <Footer />
          
      </div>
    </Router>
      
  );
}

export default App;
