import React from 'react';
import Header from './components/Header'

import 'semantic-ui-css/semantic.min.css'
import AddressLayer from './components/AddressLayer';
import Home from './components/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Contact from './pages/Contact';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AddressLayer />
        <Header />
        <Switch>
          <Route path='/contact' component={Contact} />
          
          <Route path='/' component={Home}  exact/>
        </Switch>
        <Footer/>
      </div>

    </BrowserRouter> 
     );
  }

export default App;
