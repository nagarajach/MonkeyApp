import React from 'react';
import './App.css'
import Navbar from './components/inc/Navbar'
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Register from './components/pages/Register';
import FetchApi from './components/pages/FetchApi';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Footer from './components/inc/Footer';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>   
          <Route path="/register">
            <Register />
          </Route> 
          <Route path="/fetchapi">
            <FetchApi />
          </Route> 
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
