import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Redirect,Switch} from 'react-router-dom'
import App from './App';
import Register from './Screens/Register';

ReactDOM.render(
    <BrowserRouter>
    <Switch>
        <Route path = '/' exact render = {props => <App {...props}/>}/>
    </Switch>
    </BrowserRouter>,
  document.getElementById('root')
);


