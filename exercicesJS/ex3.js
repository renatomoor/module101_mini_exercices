

function operations() {
    var nb = 1;
    var nb2 = 2;
    var answerBox = document.getElementById('answerBox');
    var result = "";

    result = "Valeur de nb: " + nb + "<br>";
    result += "Valeur de nb++: " + nb++ + "<br>";
    result += "Valeur de nb: " + nb + "<br>";
    result += "Valeur de nb++: " + ++nb + "<br>";
    result += "Valeur de --nb: " + --nb + "<br>";
    result += "Valeur de nb: " + nb + "<br>";
    nb += nb2;
    result += "nb+=nb2, valeur de nb: " + nb + "<br>";

    answerBox.innerHTML = "Exercice 3 <br><br>";
    answerBox.innerHTML += result;

    nb = 1;
    nb2 = 2;

}

