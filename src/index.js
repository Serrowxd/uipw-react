import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

// Route Imports

import HomePage from './pages/HomePage';
import Services from './pages/Services';
import Contact from './pages/Contact';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={HomePage} />
      <Route path="/services" component={Services} />
      <Route path="/contact" component={Contact} />
    </div>
  </Router>,

  document.getElementById('root')
);
registerServiceWorker();
