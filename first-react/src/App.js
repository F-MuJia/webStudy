import React, { Component, Suspense, lazy } from "react";
import { withRouter, NavLink, Switch, Redirect, Route } from "react-router-dom";
import Home from './views/Home'


class App extends Component {
  render() {
    return (
     
        <Switch>
          <Route exact path="/" component={Home} />
      
        </Switch>
    );
  }
}

export default App;
