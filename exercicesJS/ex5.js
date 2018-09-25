


function while_loop() {
    var answerBox = document.getElementById('answerBox');
    var nb = 0;

    answerBox.innerHTML = "Exercice 5 <br><br> While Loop <br>";
    while (nb <= 10) {
        answerBox.innerHTML += nb + "<br>";
        nb++;
    }
    nb = 0;
}

function doWhile_loop() {
    var answerBox = document.getElementById('answerBox');
    var nb = 0;

    answerBox.innerHTML = "Exercice 5 <br>Do While Loop <br>";
    do {
        answerBox.innerHTML += nb + "<br>";
        nb++;
    } while (nb <= 10);
    nb = 0;
}

function for_loop() {
    var answerBox = document.getElementById('answerBox');
    var nb = 0;

    answerBox.innerHTML = "Exercice 5 <br>For Loop <br>";
    for (nb = 0; nb <= 10; nb++ ) {
        answerBox.innerHTML += nb + "<br>";
    }
    nb = 0;
}