import React from 'react';
import ReactDom from 'react-dom'
import './index.css';
import App from './App.jsx';

const root = document.getElementById('root');
ReactDom.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
,root);
