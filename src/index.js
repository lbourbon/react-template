/*!

 =========================================================
 * Material Dashboard React - v1.9.0 based on Material Dashboard - v1.2.0
 =========================================================

 * Product Page: http://www.creative-tim.com/product/material-dashboard-react
 * Copyright 2020 Creative Tim (http://www.creative-tim.com)
 * Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */
import React from "react";
import ReactDOM from "react-dom";
import history from "./history";
import { Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home.js";
import Login from "./pages/Login.js";
import App from "./App.js";
import {UserContextProvider} from './context/userContext'

import "assets/css/material-dashboard-react.css?v=1.9.0";


ReactDOM.render(
    <UserContextProvider>
      <Router history={history}>
        <Switch>
          <Route exact path="/"><Home/></Route>
          <Route exact path="/login"><Login/></Route>
          <Route path="/" component={App}/>
        </Switch>
      </Router>
    </UserContextProvider>,
  document.getElementById("root")
);
