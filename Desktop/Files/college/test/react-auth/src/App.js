import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Nav from './components/nav-comp'
import Home from './components/home';
import Login from './components/login';
import Register from './components/register'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Nav/>
           <div classbane ='auth-wrapper'>
           <div className = "auth-inner">
             <Switch>
                <Route exact path = "/" component ={Home}/>
                <Route exact path = "/register" component ={Register}/>
                <Route exact path = "/login" component ={Login}/>
                
             </Switch>
             
           </div>
           </div>
    </div>
    </BrowserRouter>

  );
}

export default App;
