
function askNumbers() {

    var answerBox = document.getElementById('answerBox');
    var nb1 = 0;
    var nb2 = 0;
    var result = '';

    nb1 = getAndTestNumber('premiere');
    if (nb1 === "not a number"){
        return
    }
    nb2 = getAndTestNumber('deuxième');
    if (nb2 === "not a number"){
        return
    }

    if (nb1 > nb2) {
        result = nb1 + " est plus grand que " + nb2;
    }
    else if (nb1 < nb2) {
        result = nb1 + " est plus petite que " + nb2;
    }
    else if (nb1 === nb2) {
        result = nb1 + " est égal " + nb2;
    }
    else {
        result = "Un error s'a produit pendant le calcul";
    }

    alert(result);
    answerBox.innerHTML = "Exercice 4 <br><br>";
    answerBox.innerText += result;
}

function testNumber(nb) {

    if (isNaN(nb)) {
        alert("Désole, vous n'avais pas introduit un nombre \n rechargez la page SVP.");
        return true
    }
    return false
}

function getAndTestNumber(name) {
    var nombre;
    nombre = Number(prompt("SVP introduire le " + name +  " nombre"));
    if(testNumber(nombre)){
        return "not a number"
    }
    return nombre;
}