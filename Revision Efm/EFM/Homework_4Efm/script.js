const btn_ajouter = document.getElementById("btn_ajouter_note");
const input_id = document.getElementById("id");
const input_nom = document.getElementById("nom");
const input_note = document.getElementById("note");
const btn_lire = document.getElementById("lire");
let stagaire = {};
let stagaires = [{ id: 1, nom: "alami hicham", note: 8, filiere: "tdi" }];
// 2) :
function validation() {
  if (input_id.value == "") {
    input_id.classList.add("border", "border-danger");
    console.log("champs Id est obligatoir");
  }
  if (input_nom.value == "") {
    input_nom.classList.add("border", "border-danger");
    console.log("champs nom est obligatoir");
  }
  if (input_note.value == "") {
    input_note.classList.add("border", "border-danger");
    console.log("champs note est obligatoir");
  }
}

// 3) :
btn_ajouter.addEventListener("click", () => {
  const fileres = Array.from(
    document.querySelectorAll("#container_filiere>input")
  );
  const filiereCheked = fileres.find((element) => element.checked == true);
  console.log(filiereCheked);
  document.querySelector(
    "tbody"
  ).innerHTML += `<tr id="${input_id.value}"><td>${input_id.value}</td><td>${input_nom.value}</td><td>${input_note.value}</td><td>${filiereCheked.nextElementSibling.textContent}</td><td><input type="button" class="btn_supprimer" value="Supprimer" ></td></tr>`;
  stagaire = {
    id: Number(input_id.value),
    nom: input_nom.value,
    note: Number(input_note.value),
    filiere: filiereCheked.nextElementSibling.textContent.toLocaleLowerCase(),
  };
  stagaires.push(stagaire);
  actualiserNoteMax()
});
// 4) :
btn_lire.addEventListener("click", () => {
  let affichegeElement = stagaires.find(
    (element) => element.id == input_id.value
  );
  console.log(affichegeElement);
  input_nom.value = affichegeElement.nom;
  input_note.value = affichegeElement.note;
  console.log(affichegeElement.filiere)
 let valueChecked = affichegeElement.filiere
  document.getElementById(valueChecked).checked=1
});
// 5):
document.querySelector("tbody").addEventListener("click",(e)=>{
   let trSelectd = e.target.parentElement.parentElement.id
   let finded = stagaires.findIndex((element)=>element.id==trSelectd)
   stagaires.splice(finded,1)
   e.target.parentElement.parentElement.remove()
   actualiserNoteMax()
})
// 6):
function actualiserNoteMax(){
  let total = 0
  stagaires.forEach((element)=>{
    if(total<element.note){
      total=element.note
    }
  })
  document.getElementById("total").innerHTML=total
}
actualiserNoteMax()