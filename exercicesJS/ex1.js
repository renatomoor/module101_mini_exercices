

function calcul() {
    var number1 = 10;
    var number2 = 5;
    var result = 0;
    var answerBox = document.getElementById('answerBox');

    result = number1 + number2;
    var str = "Le résultat de " + number1 +  " + " + number2 +  " est égale a " + result;
    alert(str);
    answerBox.innerHTML = "Exercice 1 <br><br>";
    answerBox.innerText += str;
}





