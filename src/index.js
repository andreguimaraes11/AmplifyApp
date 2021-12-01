import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import awsconfig from './aws-exports';
import Amplify, { Auth } from 'aws-amplify';
import App from './App.js';

Amplify.configure(awsconfig);

ReactDOM.render(
  <App/>
 ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
