import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
const data = [
  {
    category: 'clothes',
    name: 'Red-T-Shirt',
    price: 10
  },
  {
    category: 'clothes',
    name: 'Blue-T-Shirt',
    price: 20
  },
  {
    category: 'Electronics',
    name: 'Television',
    price: 400
  },
  {
    category: 'Electronics',
    name: 'fridge',
    price: 200
  },
  {
    category: 'Electronics',
    name: 'Radio',
    price: 90
  }
];
ReactDOM.render(
  <React.StrictMode>
    <App data = {data}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();