function userSpeichern(Bezeichner,Wert) {//erwartet Username und Passwort
    var jetzt = new Date;
    jetzt = jetzt.getTime() + 1000*60*60
    document.cookie = Bezeichner + "=" + Wert "; expires=" + jetzt.toGMTString() + ";";
}

function userLesen(){
    var wert = "";
    if(document.cookie){
        var Wertstart = document.cookie.indexOf("=") + 1;
        var Wertende = document.cookie.indexOf(";");
            if (Wertende == -1) {
      Wertende = document.cookie.length;
      }
  	Wert = document.cookie.substring(Wertstart, Wertende);
    }
}

function userLogout() {
var expires = new Date.getTime().toGMTString();
document.cookie = "expires="+expires+";";
}

function login(){
var password = document.getElementById("pass").value;
var username = document.getElementById("username").value;
    if(username === "" && password === ""){
        userSpeichern(username,password);
    }
    if(username === "" && password === ""){
        userSpeichern(username,password);
    }
}

function resetPassword(){
    var username = document.getElementById(username).value;
    if(username === ""){
        window.alert("Dein Passwort ist: ");
        }
        if(username === ""){
        window.alert("Dein Passwort ist: ");
        }
}