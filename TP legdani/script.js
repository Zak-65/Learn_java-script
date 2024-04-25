class Etudiant {
  constructor(id, nom, gendre, model, etablissment) {
    this.id = id;
    this.nom = nom;
    this.gendre = gendre;
    this.model = model;
    this.etablissment = etablissment;
  }
  presentez_etudiant() {
    return `bonjour je suis ${this.nom} mon id est : ${this.id} j'étudie ${this.model} ou etablissment : ${this.etablissment} `;
  }
}

let Etudiants = [];
// declaration de variables
const id_input = document.getElementById("idStagiare");
const id_nom = document.getElementById("nomStagiare");
const input_gender = document.querySelectorAll("#conatiner_gender>input");
const modelChecked = document.querySelectorAll("#container_model>div input");
const etablissmentSelected = document.querySelector("select");
const btn_envoyer = document.getElementById("btn_envoyer");
// function

function valeurCheked(value) {
  let t;
  value.forEach((element) => {
    if (element.checked) {
      t = element.value;
    }
  });
  return t;
}

function valeurSelected(value) {
  let result = [];
  value.forEach((element) => {
    if (element.checked) {
      result.push(element.value);
    }
  });
  return result;
}
// envoyer donnes ou serveur

btn_envoyer.onclick = function () {
  Etudiants.push = new Etudiant(
    id_input.value,
    id_nom.value,
    valeurCheked(input_gender),
    valeurSelected(modelChecked),
    etablissmentSelected.value
  );
  console.table(Etudiants);
};
