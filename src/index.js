import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './style.css';
import {BrowserRouter} from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth'; 
import 'firebase/database'

var config = {
    apiKey: "AIzaSyBhdmMrr7e8HtSl4JRvIzKmTk1J2GMOhZc",
    authDomain: "foodie-map-b331b.firebaseapp.com",
    databaseURL: "https://foodie-map-b331b.firebaseio.com",
    projectId: "foodie-map-b331b",
    storageBucket: "foodie-map-b331b.appspot.com",
    messagingSenderId: "1066007953178"
  };
  firebase.initializeApp(config);
  firebase.auth().useDeviceLanguage();
ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
