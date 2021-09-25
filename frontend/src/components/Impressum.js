import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";



export default class Impressum extends Component {
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
            <h2>
                Impressum:
            </h2>
                Für das Angebot dieser Website ist verantwortlich:
            <h3>
                MyTicket AG
                Neue Straße 13
                66139 Musterhausen
            </h3>
            Zu unserem Umgang mit Ihren Daten lesen Sie bitte unsere
            <Link to{..."/Datenschutz"}>Datenschutzerklärung</Link>.
            <h2>
                Hinweise und Verfahren zur Geltendmachung von Ansprüchen bei Schutzrechtsverletzungen:
            </h2>
            Wir respektieren die Rechte am geistigen Eigentum Dritter.
            Bei Ansprüchen aufgrund einer Verletzung von Rechten des geistigen Eigentums senden Sie uns bitte eine entsprechende Mitteilung.
            <h2>
                Haftungsausschluss:
            </h2>
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
                Haftung für Links
            </h3>
            Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben.
            Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
            Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
            Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
            Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar.
            Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            <h3>
                Urheberrecht
            </h3>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.
            Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet.
            Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis.
            Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
            <h2>
                Kontaktformular:
            </h2>
            Bitte verwenden Sie dieses Formular, um mit uns in Kontakt zu treten.



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