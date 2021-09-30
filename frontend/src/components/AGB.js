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
            <div id="fix_navbar_fewText">
            </div>
            <h3>
                allgemeine Geschäftsbedingungen
            </h3>
                Unseren allgemeinen Geschäftsbedingungen stimmen Sie mit der Nutzung dieser Website zu.<br />
                Nutzung der Website auf eigene Gefahr, Eltern haften für ihre Kinder!<br />
                Unsere allgemeinen Geschäftsbedingungen enthalten:
                <ul>
                    <li className="nav-item">A Dies sind die allgemeinen Geschäftsbedingungen von MyTicket</li>
                    <li className="nav-item">B MyTicket verwendet JavaScript und React, um Ihnen ein möglichst gutes Surferlebnis zu ermöglichen</li>
                    <li className="nav-item">C Wer stört sich schon an den Schriftarten, die wir von Google beziehen?</li>
                    <li className="nav-item">D Dies liegt am MaterialUI-Theme, das wir verwenden.</li>
                </ul>
                Bei Fragen verwenden Sie bitte das unten stehende Kontaktformular.<br />
                Bei Fragen zu der Verwendung Ihrer Daten lesen Sie bitte zuerst unsere
                <Link href={"/Datenschutz"} color="#000000" underline="hover"> Datenschutzerklärung</Link>.
                <form autocomplete="off">
                                <div className="form-group">
                                    <label>
                                        Ihre Nachricht:
                                    </label>
                                    <textarea type="text" className="form-control" placeholder="Nachricht" />
                                </div>
                                <div className="form-group">
                                    <label>
                                        Ihre Mailadresse:
                                    </label>
                                    <input type="text" className="form-control" placeholder="Mailadresse" />
                                </div>
                                <button type="submit" className="button btn">
                                    senden
                                </button>
                            </form>
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