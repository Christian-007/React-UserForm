import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar } from './components/navbar';
import { Jumbotron } from './components/jumbotron';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Signup from './components/signup';
import { HashRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

const store = createStore(
  (state = {}) => state,
  applyMiddleware(thunk)
);

ReactDOM.render(
  <div>
    <Navbar/>
  </div>
  ,document.getElementById('react-nav')
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/signup" component={Signup} />
      </div>
    </Router> 
  </Provider>
  ,document.getElementById('react-container')
)