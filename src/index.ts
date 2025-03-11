const input = document.getElementById("tacheInput") as HTMLInputElement;
const btn = document.getElementById("ajouterBtn") as HTMLButtonElement;
const ul = document.getElementById("tachesListe") as HTMLUListElement;
const messageErreur = document.getElementById("messageErreur") as HTMLDivElement;

const AjouterTache = function (task: string): void {
    if (task.trim() === "") {
        messageErreur.textContent = "Veuillez entrer une tache.";
        return;
    }

    const li = document.createElement("li");
    li.textContent = task;

    const suppBtn = document.createElement("button");
    suppBtn.textContent = "Supprimer";
    suppBtn.addEventListener("click", () => {
        ul.removeChild(li);
    });

    li.appendChild(suppBtn);
    ul.appendChild(li);
};

btn.addEventListener("click", () => {
    AjouterTache(input.value);
    input.value = ""; 
});
