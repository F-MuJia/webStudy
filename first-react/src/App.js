import React, { Component, Suspense, lazy } from "react";
import { withRouter, NavLink, Switch, Redirect, Route } from "react-router-dom";
import Home from "./views/Home";
// const Home = lazy(() => import("./views/Home"));

class App extends Component {
  render() {
    return (
      // <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      // </Suspense>
    );
  }
}

export default App;
