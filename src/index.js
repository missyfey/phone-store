import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ProductProvider} from './context'

ReactDOM.render(
    <ProductProvider>
      <Router>
        <App />
      </Router>
    </ProductProvider>,
  document.getElementById('root')
);

reportWebVitals();
