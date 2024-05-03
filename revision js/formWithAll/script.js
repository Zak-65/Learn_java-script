// declaration
const url =
  "https://getpantry.cloud/apiv1/pantry/7cc2178f-af4a-4d0a-aef5-3eb69981b61a/basket/test";
const inptID = document.getElementById("idEtudiant");
const inptNom = document.getElementById("nomEtudiant");
const inptAge = document.getElementById("ageEtudiant");
const sumbit = document.getElementById("submit");
const afficher = document.getElementById("afficher");
const spanModule = document.getElementById("spanModule");
const spanSexe = document.getElementById("spanSexe");
let idModuleChecked = [];
let stagiares = [];
let sexeCheked;
function validation() {
  let verfie = true;
  if (inptID.value == "") {
    inptID.style.border = "solid red 1px";
    verfie = false;
  } else {
    inptID.style.border = "solid green 1px";
  }
  if (inptNom.value == "") {
    inptNom.style.border = "solid red 1px";
    verfie = false;
  } else {
    inptNom.style.border = "solid green 1px";
  }
  if (inptAge.value == "") {
    inptAge.style.border = "solid red 1px";
    verfie = false;
  } else {
    inptAge.style.border = "solid green 1px";
  }
  if (idModuleChecked == "") {
    spanModule.textContent = "Selectioner une module";
    spanModule.style.color = "red";
    verfie = false;
  } else {
    spanModule.textContent = " ";
  }
  if (sexeCheked == null) {
    spanSexe.textContent = "Selectiner Sexe";
    spanSexe.style.color = "red";
    verfie = false;
  } else {
    spanSexe.textContent = " ";
  }
  return verfie;
}

//----------------- class Stagiare--------------
class Stagiare {
  constructor(id, nom, age, sexe, module) {
    this.id = id;
    this.nom = nom;
    this.age = age;
    this.sexe = sexe;
    this.module = module;
  }
}
// event ajouter au objet
sumbit.addEventListener("click", () => {
  sexeCheked = document.querySelector("input[name='sexe']:checked");
  let moduleCheked = document.querySelectorAll("input[name='module']:checked");
  // --------check is in list-----------
  let aVerifie = stagiares.find((element) => {
    return element.id == inptID.value;
  });
  if(Boolean(!aVerifie)){
      // -------- part module cheked-----------
  moduleCheked.forEach((element) => {
    idModuleChecked.push(element.id);
  });
  let s = validation();
  // ------------part ajouter stagiare--------
  //   part send data to api
  if (s) {
    stagiares.push(
      new Stagiare(
        inptID.value,
        inptNom.value,
        inptAge.value,
        sexeCheked.id,
        idModuleChecked
      )
    );
    idModuleChecked = [];
    console.log(stagiares);
    //   ----------part ajouter data
    let dataSend = JSON.stringify({ stagiares: stagiares });
    let xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("content-type", "application/json");
    xhr.onreadystatechange = function () {
      if (this.readyState == 4) {
        if (this.status >= 200 && this.status < 300) {
          console.log("data bien envoie");
        }
      }
    };
    xhr.send(dataSend);
  } else {
    idModuleChecked = [];
    console.error("validation non correct");
  }
  console.log(aVerifie);
  }else{
    let k = stagiares.findIndex((element)=>{
      return element.id==aVerifie.id
     })
     stagiares[k].id= inptID.value
    stagiares[k].nom=inptNom.value
    stagiares[k].age=inptAge.value
    stagiares[k].sexe=sexeCheked.id
    
  }
});

// ---------part affichage---------------
afficher.addEventListener("click", () => {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onreadystatechange = function () {
    if (this.readyState == 4) {
      if (this.status >= 200 && this.status < 300) {
        let responseData = JSON.parse(this.response);
        let data = responseData.stagiares;
        console.log(data);
        document.querySelector("tbody").innerHTML = "";
        data.forEach((element) => {
          document.querySelector(
            "tbody"
          ).innerHTML += `<tr><td>${element.id}</td>
                    <td>${element.nom}</td>
                    <td>${element.age}</td>
                    <td>${element.sexe}</td>
                    <td>${element.module}</td>
                    <td class="d-flex"><input type="button" id="${element.id}" value="modifier" class="btn btn-warning m-1" onclick="modifierStagier(event)" ><input type="button"  value="supprimer" onclick = "supprimerStagier(event)"  class="btn btn-danger m-1"></td>
                    </tr>`;
        });
      }
    }
  };
  xhr.send();
});

//------------ part modifier--------------

function modifierStagier(event) {
  let t = event.target;
  let c = stagiares.find((element) => {
    return element.id == t.id;
  });
  inptID.value = `${c.id}`;
  inptNom.value = `${c.nom}`;
  inptAge.value = `${c.age}`;
  document.querySelector(`input[id="${c.sexe}"]`).checked = true;
  document.querySelectorAll(`input[name="module"]`).forEach((element) => {
    element.checked = false;
  });
  c.module.forEach((element) => {
    document.getElementById(`${element}`).checked = true;
  });
}

function supprimerStagier(event) {
  let a = event.target.parentElement.parentElement;
  let b = a.firstElementChild.id;
  stagiares = stagiares.filter((element) => {
    element.id != b;
  });
  a.remove();
}
