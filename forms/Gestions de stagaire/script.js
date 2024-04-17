let stagiare = {};
const stagiares = [];
//Declaration Value forms
const nomComplet = document.getElementById("nomC_inpt");
const cin = document.getElementById("cin_inpt");
const age = document.getElementById("age_input");
const matier = document.getElementById("matier_input");
const numControle = document.getElementById("num_controle_input");
const note = document.getElementById("note_input");
const cin_radio = document.getElementById("cin_radio");
const note_radio = document.getElementById("note_radio");
const rechercher_cin_input = document.getElementById("rechercher_cin_input");
const rechercher_note_input = document.getElementById("rechercher_note_input");
const btn_valid_cherche = document.getElementById("btn_valid_cherche");
const tableau_cherche = document.getElementById("affichage_cherche");
const tbody = document.querySelector("tbody");
// Declaration pattern

// Declaration btn
const bnt_ajouter = document.getElementById("btn_ajouter");
const bnt_recherche = document.getElementById("bnt_recherche");
const btn_Send = document.getElementById("btn_Send");
// Declaration items
const form_display = document.getElementById("form_gestion_stagaire");
const part_recherche = document.getElementById("part_recherche");

// function details gestion
const totalStagiares = document.getElementById("");
let avgStagiares = document.getElementById("avg_note_affichage")
let total_avg = 0
document.addEventListener(
  "DOMContentLoaded",
  () => (totalStagiares.innerHTML = stagiares.length)
);

//----------------- Part for ajouter --------------------------
// function ajouter
bnt_ajouter.addEventListener("click", () => {
  part_recherche.style.display = "none";
  form_display.style.display = "flex";
  bnt_ajouter.style.background = "green";
  bnt_recherche.style.background = "";
});
// function sund form
btn_Send.addEventListener("click", () => {
  let verification_form = 0;
  if (nomComplet.value !== "") {
    nomComplet.style.border = "green solid 2px";
    verification_form++;
  } else {
    nomComplet.style.border = "red solid 1px";
  }
  if (cin.value !== "") {
    cin.style.border = "green solid 2px";
    verification_form++;
  } else {
    cin.style.border = "red solid 1px";
  }
  if (age.value !== "") {
    age.style.border = "green solid 2px";
    verification_form++;
  } else {
    age.style.border = "red solid 1px";
  }
  if (matier.value !== "Selectioner votre metier") {
    matier.style.border = "green solid 2px";
    verification_form++;
  } else {
    matier.style.border = "red solid 1px";
  }
  if (numControle.value !== "") {
    numControle.style.border = "green solid 2px";
    verification_form++;
  } else {
    numControle.style.border = "red solid 1px";
  }
  if (note.value !== "") {
    note.style.border = "green solid 2px";
    verification_form++;
  } else {
    note.style.border = "red solid 1px";
  }
  if (verification_form === 6) {
    stagiare[nomComplet.previousElementSibling.textContent.replace(" ", "")] =
      nomComplet.value;
    stagiare[cin.previousElementSibling.textContent.replace(" ", "")] =
      cin.value;
    stagiare[age.previousElementSibling.textContent.replace(" ", "")] =
      age.value;
    stagiare[matier.previousElementSibling.textContent.replace(" ", "")] =
      matier.value;
    stagiare[numControle.previousElementSibling.textContent.replace(" ", "")] =
      numControle.value;
    stagiare[note.previousElementSibling.textContent.replace(" ", "")] =
      note.value;
    stagiares.push(stagiare);
    console.log(stagiare);
    console.log(stagiares);
    totalStagiares.innerHTML = `Stagaire N°: ${stagiares.length}`;
    stagiares.forEach((element)=>{
      total_avg = total_avg + Number(element.note)})
    console.log(total_avg)
    total_avg = total_avg/stagiares.length
    avgStagiares.innerHTML=`Moyen :${total_avg.toFixed(2)}`
    total_avg=0  
    console.log("bien ajouter");
    stagiare = {};
  } else {
    console.log("non ajouter");
    stagiare = {};
  }
});
// --------------------------------------------------------------

//-------------------------part of Rechercher-----------------
cin_radio.checked = true;
let radio_selected = rechercher_cin_input;
bnt_recherche.addEventListener("click", () => {
  form_display.style.display = "none";
  part_recherche.style.display = "block";
  bnt_recherche.style.background = "green";
  bnt_ajouter.style.background = "";
});
cin_radio.addEventListener("click", () => {
  rechercher_note_input.style.display = "none";
  rechercher_cin_input.style.display = "block";
  radio_selected = rechercher_cin_input;
});
note_radio.addEventListener("click", () => {
  rechercher_note_input.style.display = "block";
  rechercher_cin_input.style.display = "none";
  radio_selected = rechercher_note_input;
});
let result;
btn_valid_cherche.addEventListener("click", () => {
    tbody.innerHTML ="" 
  if (radio_selected === rechercher_cin_input) {
    result = stagiares.filter((element) => element.cin == radio_selected.value);
    console.log("1");
  }
  if (radio_selected !== rechercher_cin_input) {
    result = stagiares.filter(
      (element) => element.note == radio_selected.value
    );
    console.log("2");
  }
  if (result != "") {
    tableau_cherche.style.display = "block";
    document.getElementById("message_error").innerHTML=""
  result.forEach((element) => {
    tbody.innerHTML += `<tr>
                                    <td>${element.Nomcomplet}</td>
                                    <td>${element.cin}</td>
                                    <td>${element.Age}</td>
                                    <td>${element.Matier}</td>
                                    <td>${element.Numerocontrole}</td>
                                    <td>${element.note}</td>
                                </tr>`;
  });
  } else {
    document.getElementById("message_error").innerHTML="aucun resultat trouvé"
    document.getElementById("message_error").style.color="red"
    tbody.innerHTML ="" 
  }
});
