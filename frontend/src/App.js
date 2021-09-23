import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Main from './components/Main';

function App() {
  return (<Router>

          <Switch>
            <Route exact path='/' component={Main} />
            <Route path="/sign-in" component={SignIn} />
            <Route path="/sign-up" component={SignUp} />
          </Switch>
    
    </Router>
  )}
  export default App;