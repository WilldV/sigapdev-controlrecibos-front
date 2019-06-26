import React, { Component } from 'react';
import './global/css/App.css';

import { Switch, Route, Redirect, BrowserRouter} from "react-router-dom";
import CheckCollection from "./CheckCollection";
import NewCollection from "./NewCollection";
import Login from "./global/Login"

const isLogged = () => {
  const user = localStorage.getItem('user')
  if(!user) return false
  return true
}

const AuthRoute = ({component: Component, ...rest}) => {
  return <Route {...rest} render = {props => (
    isLogged() ? (
    <Component {...props}/>
    ) : 
    (
    <Redirect to={{pathname: '/login'}}/>
    )
  )}/>
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/login" render={props => <Login {...props}/> } />
            <AuthRoute exact path="/nueva" component={NewCollection} />
            <AuthRoute exact path="/" component={CheckCollection} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
