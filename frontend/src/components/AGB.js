import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";



export default class AGB extends Component {
    render() {
        return (
            <div className="App">
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
              <div className="container">
                <Link className="navbar-brand" to={"/Main"}>MyTicket</Link>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <Link className="nav-link" to={"/sign-in"}>Sign in</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            <div className="App">
            <div className="outer">
            <div className="static">
            <h2>
                allgemeine Geschäftsbedingungen
            </h2>
                Unseren allgemeinen Geschäftsbedingungen stimmen Sie mit der Nutzung dieser Website zu.



            </div>
            </div>
            </div>
            <nav className="navbar navbar-expand-lg navbar-light fixed-bottom">
              <div className="container">
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <Link className="nav-link" to={"/impressum"}>Impressum |</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to={"/datenschutz"}>Datenschutzerklärung |</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to={"/gesch-bdg"}>Allgemeine Geschäftsbedingungen</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            </div>
        );
    }
}