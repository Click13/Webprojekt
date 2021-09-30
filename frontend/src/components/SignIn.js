import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {Redirect} from 'react-router';

import '../css/Login.css'
import '../css/Navbar.css'

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {username: ''};
        this.state = {password: ''};
        this.state = {loggedIn: false};
        this.handleChangeUSER = this.handleChangeUSER.bind(this);
        this.handleChangePW = this.handleChangePW.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChangeUSER(event){
        this.setState({username: event.target.value});
    }
    handleChangePW(event){
            this.setState({password: event.target.value});
        }
    handleSubmit(event){
        if(this.state.username === 'Test@data.de' &&
        this.state.password === 'test'
        ){
            this.setState({loggedIn: true});
        }
    }
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
            <div className="inner">
            if(this.state.loggedIn === true){
                <Redirect to='/loggedInUser'/>
            }
            else{
            <div id="fix_navbar_fewText">
            </div>
            [
            <form onSubmit={this.handleSubmit}>
                <h3>Log in</h3>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" value={this.state.value} onChange={this.handleChangeUSER} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" value={this.state.value} onChange={this.handleChangePW} />
                </div>
                <button type="submit" className="button btn" >Login</button>
                <p className="forgot-password text-right">
                    <Link className="nav-link" to={"/reset-password"}> Forgot password?</Link>
                    <Link className="nav-link" to={"/sign-up"}>Not registered yet?</Link>
                </p>
            </form>
            ]
            }
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