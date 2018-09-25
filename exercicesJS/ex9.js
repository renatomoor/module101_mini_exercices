var marginLeft = 0;

function addbtnSpan(id, name, exec) {
    var span = document.createElement('span');
    span.id = "span_" + id;
    var btn  = document.createElement('button');
    btn.setAttribute("onclick", exec);
    btn.id = id;
    answerBox.appendChild(span);
    document.getElementById("span_" + id).appendChild(btn);
    document.getElementById(id).innerHTML = name;
}

function salaire() {
    var answerBox = document.getElementById('answerBox');
    answerBox.innerHTML = "Exercice 9 <br><br>";
    answerBox.innerHTML += "Etes-vous satisfait de votre salaire <br>";
    addbtn("oui", "Oui", "oui()");
    addbtnSpan("non", "Non", "non()");
    document.getElementById("span_non").style.display = "block";
}


function oui() {
    alert("Félititations!");
    answerBox.innerHTML = "Exercice 9 <br>";
    answerBox.innerText += "Félititations"
}

function non() {
        if (marginLeft < 0 ){
            marginLeft = Math.floor((Math.random() * 35) + 1);
        }
        else {
            marginLeft = Math.floor((Math.random() * -35) + 1);
        }
    document.getElementById("non").style.marginLeft = marginLeft + "em";
}