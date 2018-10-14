import React from 'react'
import {render} from 'react-dom'
import App from './components/App.jsx'
import firebase from 'firebase'

firebase.initializeApp({
    apiKey: "AIzaSyBNTB32pE-4sp7K1O0xV0sbU8ip68X5vdM",
    authDomain: "seudogram-b6c53.firebaseapp.com",
    databaseURL: "https://seudogram-b6c53.firebaseio.com",
    projectId: "seudogram-b6c53",
    storageBucket: "seudogram-b6c53.appspot.com",
    messagingSenderId: "540425625946"
})
render (
    <App/>,document.getElementById('app')
);