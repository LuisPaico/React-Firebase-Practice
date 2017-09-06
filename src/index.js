import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

firebase.initializeApp({
    apiKey: "AIzaSyC-5cwkJ99qGgwh_LfIyzMeWIBSYdGPDBE",
    authDomain: "pseudogram-a9e92.firebaseapp.com",
    databaseURL: "https://pseudogram-a9e92.firebaseio.com",
    projectId: "pseudogram-a9e92",
    storageBucket: "pseudogram-a9e92.appspot.com",
    messagingSenderId: "639035493579"
})

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
