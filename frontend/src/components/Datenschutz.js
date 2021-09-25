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
                            Datenschutz
                        </h2>
                            Der Schutz Ihrer Daten ist uns sehr wichtig. In diesen Datenschutzbestimmungen wird erläutert, welche personenbezogenen Daten
                            erfasst werden sowie wie und wofür sie verwendet werden.
                        <h3>
                            Erfassung von personenbezogenen Daten:
                        </h3>
                            Wir sammeln Daten über Sie, durch unsere Interaktionen mit Ihnen sowie über unsere Produkte.
                            Einige dieser Daten stellen Sie direkt bereit, andere erhalten wir durch das Sammeln von Informationen über Ihre Aktivitäten, Nutzung und Erfahrungen mit unseren Produkten.
                            Wir erhalten ebenfalls Daten über Sie von Drittanbietern.
                        <h3>
                            Kommentare:
                        </h3>
                            Wenn Besucher Kommentare auf der Website schreiben, sammeln wir die Daten, die im Kommentar-Formular angezeigt werden, außerdem die IP-Adresse des Besuchers und den User-Agent-String (damit wird der Browser identifiziert), um die Erkennung von Spam zu unterstützen.
                        <h3>
                            Cookies:
                        </h3>
                            Wenn du einen Kommentar auf unserer Website schreibst, kann das eine Einwilligung sein, deinen Namen, E-Mail-Adresse und Website in Cookies zu speichern.
                            Dies ist eine Komfortfunktion, damit du nicht, wenn du einen weiteren Kommentar schreibst, all diese Daten erneut eingeben musst.
                            Diese Cookies werden ein Jahr lang gespeichert.
                            Falls du ein Konto hast und dich auf dieser Website anmeldest, werden wir ein temporäres Cookie setzen, um festzustellen, ob dein Browser Cookies akzeptiert.
                            Dieses Cookie enthält keine personenbezogenen Daten und wird verworfen, wenn du deinen Browser schließt.
                            Wenn du dich anmeldest, werden wir einige Cookies einrichten, um deine Anmeldeinformationen und Anzeigeoptionen zu speichern.
                            Anmelde-Cookies verfallen nach zwei Tagen und Cookies für die Anzeigeoptionen nach einem Jahr.
                            Falls du bei der Anmeldung „Angemeldet bleiben“ auswählst, wird deine Anmeldung zwei Wochen lang aufrechterhalten.
                            Mit der Abmeldung aus deinem Konto werden die Anmelde-Cookies gelöscht.
                            Wenn du einen Artikel bearbeitest oder veröffentlichst, wird ein zusätzlicher Cookie in deinem Browser gespeichert.
                            Dieser Cookie enthält keine personenbezogenen Daten und verweist nur auf die Beitrags-ID des Artikels, den du gerade bearbeitet hast.
                            Der Cookie verfällt nach einem Tag.
                        <h3>
                            Eingebettete Inhalte von anderen Websites:
                        </h3>
                            Beiträge auf dieser Website können eingebettete Inhalte beinhalten (z. B. Videos, Bilder, Beiträge etc.).
                            Eingebettete Inhalte von anderen Websites verhalten sich exakt so, als ob der Besucher die andere Website besucht hätte.
                            Diese Websites können Daten über dich sammeln, Cookies benutzen, zusätzliche Tracking-Dienste von Dritten einbetten und deine Interaktion mit diesem eingebetteten Inhalt aufzeichnen, inklusive deiner Interaktion mit dem eingebetteten Inhalt, falls du ein Konto hast und auf dieser Website angemeldet bist.
                        <h3>
                            Analysedienste:
                        </h3>
                            Wenn du einen Kommentar schreibst, wird dieser inklusive Metadaten zeitlich unbegrenzt gespeichert.
                            Auf diese Art können wir Folgekommentare automatisch erkennen und freigeben, anstelle sie in einer Moderations-Warteschlange festzuhalten.
                            Für Benutzer, die sich auf unserer Website registrieren, speichern wir zusätzlich die persönlichen Informationen, die sie in ihren Benutzerprofilen angeben.
                            Alle Benutzer können jederzeit ihre persönlichen Informationen einsehen, verändern oder löschen (der Benutzername kann nicht verändert werden).
                            Administratoren der Website können diese Informationen ebenfalls einsehen und verändern.
                        <h3>
                            Welche Rechte du an deinen Daten hast:
                        </h3>
                        Wenn du ein Konto auf dieser Website besitzt oder Kommentare geschrieben hast, kannst du einen Export deiner personenbezogenen Daten bei uns anfordern, inklusive aller Daten, die du uns mitgeteilt hast.
                        Darüber hinaus kannst du die Löschung aller personenbezogenen Daten, die wir von dir gespeichert haben, anfordern.
                        Dies umfasst nicht die Daten, die wir aufgrund administrativer, rechtlicher oder sicherheitsrelevanter Notwendigkeiten aufbewahren müssen.
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