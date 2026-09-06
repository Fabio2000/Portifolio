import React from 'react';
import ReactDOM from 'react-dom/client';
// O Bootstrap vem antes do index.css para os tokens de tema terem a
// ultima palavra sobre `body`, `.btn` e `.nav-link`.
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();
