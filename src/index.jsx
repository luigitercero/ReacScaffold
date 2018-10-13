import React from 'react'
import {render} from 'react-dom'
import App from './components/App.jsx'
class Prueba extends React.Component {
  
    render () {
        return (<h1>hola</h1>)
    }
}

render (
    <App/>,document.getElementById('app')
);