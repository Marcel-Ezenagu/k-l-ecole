import React from 'react';
import Header from './components/Header'

import 'semantic-ui-css/semantic.min.css'
import AddressLayer from './components/AddressLayer';
import Home from './components/Home';
import { BrowserRouter, Route } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AddressLayer />
        <Header />
        <Route path='/' component={Home} />
        <Footer/>
      </div>

    </BrowserRouter>
     );
}

export default App;
