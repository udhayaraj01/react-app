import { render } from "react-dom";
import React from "react";
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router,Switch,Route,BrowserRouter } from 'react-router-dom';
import App from "./components/App";

const containerEl = document.getElementById("container");

render(
<Router>
<Switch>
   <Route exact path="/" component={App} />
      
</Switch>
</Router>,containerEl

);
// registerServiceWorker();
