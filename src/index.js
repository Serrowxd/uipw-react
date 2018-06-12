import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import HomePage from './pages/HomePage';
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<HomePage />, document.getElementById('root'));
registerServiceWorker();
