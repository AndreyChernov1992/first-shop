import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.css';
import App from './App';
import Products from './components/products';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Products />
  </React.StrictMode>
);
