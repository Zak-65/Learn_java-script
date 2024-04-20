// 1 _ Exercice 1 :
// declaration objet for Produits
const produits = [];
const produit = {};

// declaration Form
const declarationForm = document.getElementById("form_ajouter");
// avent pour btn Ajouter article
const bnt_ajouter = document.getElementById("btn_ajouter");
bnt_ajouter.addEventListener("click", () => {
  declarationForm.style.display = "flex";
});
// 2_Exercice 2 :
// declaration variables :
const btn_valide = document.getElementById("btn_valide");
const btn_sauvgarde = document.getElementById("btn_sauvegarder");
btn_sauvgarde.style.display = "none";

let inputs = document.querySelectorAll("#form_ajouter>input");
console.log(inputs[0].ariaLabel);
let validation_tableau = {};
// event  recevoir donnes de forms en click sur valide
btn_valide.addEventListener("click", (e) => {
  e.preventDefault();
  inputs.forEach((e) => {
    if (e.value === "") {
      e.style.border = "solid 2px red";
    } else {
      e.style.border = "solid 2px green";
      validation_tableau[e.ariaLabel] = e.value;
    }
  });
  if (validation_tableau.length < inputs.length) {
    console.log("Remplir tout le formule");
  } else {
    btn_sauvgarde.style.display = "block";
  }
  btn_sauvgarde.addEventListener("click", (e) => {
    e.preventDefault();
    validation_tableau.forEach((elemnt) => {
      produits.push(elemnt);
    });
    validation_tableau = [];
    console.log(produits);
  });
  console.log(produits);
  console.log(validation_tableau);
});
