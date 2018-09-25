
var answerBox = document.getElementById('answerBox');

var result= "";

function imbriquer() {
    answerBox.innerHTML = "";
    for(nb1 = 0; nb1 <= 10 ; nb1++){
        for (nb2 = 0; nb2 <= 10; nb2++){
            result += nb2
        }
        result += "<br>"
    }
    answerBox.innerHTML = "Exercice 6 <br><br>";
    answerBox.innerHTML += result;
    result = "";
}