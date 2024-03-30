// declaration tableau
let etudiants = [
  {
    nomComplet: "khalid",
    cin: "ljn",
    branche: "Resaux",
    module: "Cyber Security",
  },
  {
    nomComplet: "khalid",
    cin: "bk213",
    branche: "Resaux",
    module: "Cyber Security",
  },
  {
    nomComplet: "khalid",
    cin: "bk213",
    branche: "Resaux",
    module: "Cyber Security",
  },
  {
    nomComplet: "khalid",
    cin: "bk21",
    branche: "Resaux",
    module: "Cyber Security",
  },
];
let etudiant = {};
const branche = ["Developpement", "Resaux", "Infographie", "Mecanique"];
const option = {
  Developpement: ["JavaScript", "HTML", "CSS", "PHP"],
  Resaux: ["Cyber Security", "LINUX"],
  Infographie: ["Premier pro", "ilustrator", "photoshop"],
  Mecanique: ["V6", "V8", "Montisseur"],
};
// declaration element
const inpt_rechercher = document.getElementById("Recherche");
const inpt_nomComplet = document.getElementById("nomComplet");
const inpt_cin = document.getElementById("cin");
const inpt_branche = document.getElementById("branche");
const inpt_module = document.getElementById("module");
const all_input = document.getElementsByTagName("input");
const all_option_value = document.getElementsByTagName("select");
const all_label_form = document.getElementsByTagName("label");
let affichage = document.getElementById("containerAffichage");
// declaratio button
const btn_rechercher = document.getElementById("btn_recherche");
const btn_enregistrer = document.getElementById("btn_enregistrer");
// remplissage select branche
window.addEventListener("DOMContentLoaded", (event) => {
  for (let i = 0; i < branche.length; i++) {
    inpt_branche.innerHTML += `<option value="${branche[i]}">${branche[i]}</option>`;
  }
});
// remplisage select option
inpt_branche.addEventListener("change", (element) => {
  inpt_module.innerHTML = "";
  let valueselected = inpt_branche.value;
  if (valueselected == "") {
    console.error("selectioner une branche");
  }
  option[valueselected].forEach(function (element) {
    inpt_module.innerHTML += `<option value="${element}">${element}</option>`;
  });
});
// enregistre information
btn_enregistrer.addEventListener("click", () => {
  for (let i = 1; i < all_input.length; i++) {
    etudiant[all_input[i].id] = all_input[i].value;
  }
  for (let i = 0; i < all_option_value.length; i++) {
    etudiant[all_option_value[i].id] = all_option_value[i].value;
  }
  etudiants.push(etudiant);
  console.log(etudiants);
  etudiant = {};
});
// rechercher etudiant
btn_rechercher.addEventListener("click", () => {
  affichage.innerHTML = "";
  etudiants.forEach((element) => {
    if (element.cin === inpt_rechercher.value) {
      affichage.innerHTML += `<p>Nom:${element.nomComplet}<br/>Cin:${element.cin}<br/>Branche:${element.branche}<br/>module:${element.module}</p>`;
    }
  });
});
