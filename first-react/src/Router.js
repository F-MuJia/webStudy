import React from "react";

import {
  BrowserRouter,
  HashRouter,
  Route,
  Link,
  Switch,
} from "react-router-dom";

import App from "./App.js";

const Router = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
export default Router;
