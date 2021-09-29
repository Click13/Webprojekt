import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Box from '@mui/material/';
import TextField from'@mui/material/TextField';

import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Main from "./components/Main";
import Impressum from "./components/Impressum";
import Datenschutz from "./components/Datenschutz";
import AGB from "./components/AGB";

function App() {
  return (<Router>

          <Switch>
            <Route exact path='/' component={Main} />
            <Route path="/sign-in" component={SignIn} />
            <Route path="/sign-up" component={SignUp} />
            <Route path='/impressum' component={Impressum} />
            <Route path='/datenschutz' component={Datenschutz} />
            <Route path='/gesch-bdg' component={AGB} />
          </Switch>
    </Router>

  )}
  export default App;