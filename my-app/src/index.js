import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

function formatName(user) {
    return user.firstName + ' ' + user.lastName
}

const user = {
    firstName: 'wang',
    lastName: 'kang'
}

const element = ( 
  <h1>
    { formatName(user) } 
  </h1>
)
ReactDOM.render(
    formatName(user),
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();