import React from 'react';
import Header from './components/Header'

import 'semantic-ui-css/semantic.min.css'
import AddressLayer from './components/AddressLayer';
import Home from './components/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Salute from './components/Salute';


function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <div className="wrapper">
          
          <AddressLayer />
          <Salute/>
        <Header />
        <Switch>
          <Route path='/contact' component={Contact} />
          
          <Route path='/' component={Home}  exact/>
          </Switch>
          
        </div>
        <Footer/>
      </div>

    </BrowserRouter> 
     );
  }

export default App;
