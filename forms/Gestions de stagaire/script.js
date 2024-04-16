const stagiare = {}
const stagiares = []
//Declaration Value forms
const nomComplet = document.getElementById("nomC_inpt");
const cin = document.getElementById("cin_inpt");
const age = document.getElementById("age_input");
const matier = document.getElementById("matier_input");
const numControle = document.getElementById("num_controle_input");
const note = document.getElementById("note_input");
const cin_radio = document.getElementById("cin_radio");
const note_radio = document.getElementById("note_radio")
const rechercher_cin_input = document.getElementById("rechercher_cin_input")
const rechercher_note_input = document.getElementById("rechercher_note_input");
const btn_valid_cherche = document.getElementById("btn_valid_cherche")
// Declaration pattern



// Declaration btn
const bnt_ajouter = document.getElementById("btn_ajouter");
const bnt_recherche = document.getElementById("bnt_recherche");
const btn_Send = document.getElementById("btn_Send");
// Declaration items
const form_display = document.getElementById("form_gestion_stagaire")
const part_recherche=document.getElementById("part_recherche")

// function details gestion
const totalStagiares = document.getElementById("nbr_stagiare_div");
document.addEventListener("DOMContentLoaded",()=>totalStagiares.innerHTML=stagiares.length)

//----------------- Part for ajouter --------------------------
// function ajouter
bnt_ajouter.addEventListener("click",()=>{
    part_recherche.style.display="none"
    form_display.style.display="flex"
    bnt_ajouter.style.background="green"
    bnt_recherche.style.background=""
})
// function sund form
btn_Send.addEventListener("click",()=>{
    let verification_form = 0
    if(nomComplet.value!==""){
        nomComplet.style.border="green solid 2px"
        verification_form++
    }
    else{
        nomComplet.style.border="red solid 1px"
    }
    if(cin.value!==""){
        cin.style.border="green solid 2px";
        verification_form++
    }
    else{
        cin.style.border="red solid 1px";
    }
    if(age.value!==""){
        age.style.border="green solid 2px";
        verification_form++
    }
    else{
        age.style.border="red solid 1px";
    }
    if(matier.value!=="Selectioner votre metier"){
        matier.style.border="green solid 2px";
        verification_form++
    }
    else{
        matier.style.border="red solid 1px";
    }
    if(numControle.value!==""){
        numControle.style.border="green solid 2px";
        verification_form++
    }
    else{
        numControle.style.border="red solid 1px";
    }
    if(note.value!==""){
        note.style.border="green solid 2px";
        verification_form++
    }
    else{
        note.style.border="red solid 1px";
    }
    if(verification_form===6){
        stagiare[(nomComplet.previousElementSibling.textContent).replace(' ','')]=nomComplet.value;
        stagiare[(cin.previousElementSibling.textContent).replace(' ','')]=cin.value;
        stagiare[(age.previousElementSibling.textContent).replace(' ','')]=age.value;
        stagiare[(matier.previousElementSibling.textContent).replace(' ','')]=matier.value;
        stagiare[(numControle.previousElementSibling.textContent).replace(' ','')]=numControle.value;
        stagiare[(note.previousElementSibling.textContent).replace(' ','')]=note.value;
        stagiares.push(stagiare);
        console.log(stagiare)
        console.log(stagiares)
        totalStagiares.innerHTML=stagiares.length
        console.log("bien ajouter")
    }else{
        console.log("non ajouter")
    }
});
// --------------------------------------------------------------  

//-------------------------part of Rechercher-----------------
cin_radio.checked = true
let radio_selected =rechercher_cin_input
bnt_recherche.addEventListener("click",()=>{
    form_display.style.display="none"
    part_recherche.style.display="block"
    bnt_recherche.style.background="green"
    bnt_ajouter.style.background=""
})
cin_radio.addEventListener("click",()=>{
        rechercher_note_input.style.display="none"
        rechercher_cin_input.style.display="block"
        radio_selected = rechercher_cin_input
})
note_radio.addEventListener("click",()=>{
        rechercher_note_input.style.display="block"
        rechercher_cin_input.style.display="none"
        radio_selected=rechercher_note_input
})
btn_valid_cherche.addEventListener("click",()=>{
    let result
    if(radio_selected===rechercher_cin_input){
        result = stagiares.filter(element=>element.cin==radio_selected.value)
    }
    if(radio_selected!==rechercher_cin_input){
        result = stagiares.filter(element=>element.note==radio_selected.value)
    }
    if(result==""){
        console.log("aucun resultat trouvé")
    }
    else{
        console.log(result)
    }
})
