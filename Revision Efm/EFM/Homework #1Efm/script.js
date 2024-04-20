// declaration All btn :
const bnt_ajouter = document.getElementById("btn_ajouter");
const btn_sauvgarde = document.getElementById("btn_sauvegarder");
const btn_Annuler = document.getElementById("btn_annuler");
const bnt_vider = document.getElementById("btn_vider");

// 1 _ Exercice 1 :
// declaration objet for Produits
const produits = [
  { code: 12, nom: "jkb" },
  { code: 12, nom: "tt" },
  { code: 13, nom: "jkb" },
  { code: 14, nom: "jkb" },
];
let produit = {};

// declaration Form
const declarationForm = document.getElementById("form_ajouter");
// avent pour btn Ajouter article
bnt_ajouter.addEventListener("click", () => {
  declarationForm.style.display = "flex";
});
// 2_Exercice 2 :
// declaration variables :

let inputs = document.querySelectorAll("#form_ajouter>input");
// event  recevoir donnes de forms en click sur valide
let verification_form = "";
btn_sauvgarde.addEventListener("click", (e) => {
  e.preventDefault();
  inputs.forEach((elemnt) => {
    if (elemnt.value === "") {
      elemnt.style.border = "solid 2px red";
    } else {
      elemnt.style.border = "solid 2px green";
      produit[elemnt.ariaLabel] = elemnt.value;
    }
    verification_form = produits.find(
      (items) => items.code == produit.codeProduit
    );
  });
  if (verification_form === undefined) {
    produits.push(produit);
    console.log("produits bien ajouter");
  }
  if (verification_form !== undefined) {
    inputs.forEach((elemnt) => {
      elemnt.style.border = "solid 2px red";
    });
    console.log("produits deja existe");
    produit = {};
  }
});
console.log(inputs.length);
console.log(produit.length);
