import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, Route} from 'react-router-dom'
import App from './App';
import Main from './components/Main'
import SearchBar from './components/SearchBar'
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <BrowserRouter>
    <div>
    <Route exact path ='/' component ={App}/>
    <Route exact path ='/main' component ={Main}/>, 
    <Route exact path ='/search' component ={SearchBar}/>
    </div>
</BrowserRouter>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
