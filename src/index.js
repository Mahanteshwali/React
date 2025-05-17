import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Routerex from './routerex';
import Demo from './usestate';
import DelayedAlert from './useeffect';
import Email from './emailCheckin';
import ExampleComponent from './useeffect';
import Form from './form';
import DemoDiv from './demo';
import Notification from './notification';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routerex/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals  
reportWebVitals();