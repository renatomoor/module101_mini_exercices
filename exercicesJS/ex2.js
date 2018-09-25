


function concatenation() {
    var text1 = "Ceci est ";
    var text2 = "une chaine concaténé.";
    var result = "";
    var answerBox = document.getElementById('answerBox');

    result = text1 + text2;
    alert(result);
    answerBox.innerHTML = "Exercice 2 <br><br>";
    answerBox.innerText += result;
}