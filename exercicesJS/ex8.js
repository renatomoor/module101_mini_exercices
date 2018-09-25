var nom = "";

function addbtn(id, name, exec) {
    var btn  = document.createElement('button');
    btn.setAttribute("onclick", exec);
    btn.id = id;
    answerBox.appendChild(btn);
    document.getElementById(id).innerHTML = name;
}

function defNom() {
    var answerBox = document.getElementById('answerBox');
    var result = "";

    answerBox.innerHTML = "Exercice 8 <br>";
    addbtn("definir", "Definir mon nom", "demanderNom()")
    addbtn("afficher", "Afficher mon nom", "afficherNom()")
}

function demanderNom() {
    nom = prompt("Veuillez ecrir votre nom SVP.")
}

function afficherNom() {

    if (nom !== "") {
        result = "Votre Nom est: " + nom ;
        answerBox.innerHTML = "Exercice 8 <br><br> ";
        answerBox.innerHTML += result;
    }
    else {
        result = "ERROR! \n Vouz n'avez pas encore défini votre nom"
    }

    alert(result);
}