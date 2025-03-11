"use strict";
var input = document.getElementById("tacheInput");
var btn = document.getElementById("ajouterBtn");
var ul = document.getElementById("tachesListe");
var messageErreur = document.getElementById("messageErreur");
var AjouterTache = function (task) {
    if (task.trim() === "") {
        messageErreur.textContent = "Veuillez entrer une tache.";
        return;
    }
    var li = document.createElement("li");
    li.textContent = task;
    var suppBtn = document.createElement("button");
    suppBtn.textContent = "Supprimer";
    suppBtn.addEventListener("click", function () {
        ul.removeChild(li);
    });
    li.appendChild(suppBtn);
    ul.appendChild(li);
};
btn.addEventListener("click", function () {
    AjouterTache(input.value);
    input.value = "";
});
