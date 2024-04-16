function getId(id) {
  return document.getElementById(id);
}
// declaration variable
let dataTv;
const selectTv = getId("type_Tv");
const nmbrTv = getId("quantite");
let tbody = document.querySelector("tbody");

//  declaration btn
const ajouter_panier_btn = document.getElementById("ajouter_pannier");
let etatValidation
function valid_cmd_tv() {
  etatValidation = true;
  if (selectTv.value !== "") {
    selectTv.style.borderColor = "green";
    etatValidation = etatValidation && true;
  } else {
    selectTv.style.borderColor = "red";
    etatValidation = etatValidation && false;
  }
  if (nmbrTv.value > 1 && nmbrTv.value < 10) {
    nmbrTv.style.borderColor = "green";
    etatValidation = etatValidation && true;
  } else {
    nmbrTv.style.borderColor = "red";
    etatValidation = etatValidation && false;
  }
}

function remplirTvs() {
  const request = new XMLHttpRequest();
  request.open("GET", "Tvs.json", true);
  request.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      dataTv = JSON.parse(this.responseText).tvs;
      dataTv.forEach((element) => {
        selectTv.innerHTML += `<Option value="${element.nom}">${element.nom}</Option>`;
      });
    }
  };
  request.send();
}

document.addEventListener("DOMContentLoaded", remplirTvs);

ajouter_panier_btn.addEventListener("click", () => {
  valid_cmd_tv()
  if (etatValidation){
    let result = dataTv.find((e) => {
      return e.nom == selectTv.value;
    });
    tbody.innerHTML += `<tr><td>${result.nom}</td>
                      <td>${nmbrTv.value}</td>
                      <td><img src="${result.image}"/></td>
                      <td><button class="btn btn-danger" id ="btn_supprimer">Supprimer</button></td>
                      </tr>`;
    let btn_supprimer = document.getElementById("btn_supprimer");

    btn_supprimer.addEventListener("click", (event) => {
      event.target.parentElement.parentElement.remove();
    });
  }
});
