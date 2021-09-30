import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import TextField from'@mui/material/TextField';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';
import FormHelperText from '@mui/material/FormHelperText';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';


export default class Impressum extends Component {
    render() {
        return (
            <div className="App">
            <nav className="navbar navbar-expand-lg navbar-light">
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
            <div id="fix_navbar">
            </div>
            <h3>
                Impressum:
            </h3>
                Für das Angebot dieser Website ist verantwortlich:
            <h3>
                MyTicket AG<br />
                Neue Straße 13<br />
                66139 Musterhausen
            </h3>
            Zu unserem Umgang mit Ihren Daten lesen Sie bitte unsere
            <Link href={"/Datenschutz"} color="#000000" underline="hover"> Datenschutzerklärung</Link>.<br />
            Wir respektieren die Rechte am geistigen Eigentum Dritter.
            Bei Ansprüchen aufgrund einer Verletzung von Rechten des geistigen Eigentums senden Sie uns bitte eine entsprechende Mitteilung.
            <h3>
                Haftung für Inhalte:
            </h3>
            Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt.
            Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
            Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
            Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            <h3>
                Urheberrecht
            </h3>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.
            Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet.
            Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis.
            Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
            <h3>
                Kontaktformular:
            </h3>
            Bitte verwenden Sie dieses Formular, um mit uns in Kontakt zu treten.
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