// cree un element avec dom
document.querySelector(".creer-h1").addEventListener("click", function () {
  const parent = document.querySelector(".section-1");
  const titre = document.createElement("a");
  titre.innerHTML = "cree 2 button";
  titre.style.background = "aqua";
  parent.append(titre);
});
// supprimer un element
document.querySelector(".suprimer-h2").addEventListener("click", function () {
  const parent = document.querySelector(".section-1");
  const titre2 = document.querySelector("h2").remove();
});

document.querySelector(".creer-conteneur").addEventListener("click", () => {
  const vConteneur = document.createElement("div");
  vConteneur.setAttribute("class", "encadrer"); // pour ajouter un attribut
  vConteneur.classList.add("conteneur"); // pour ajouter un class
  document.body.append(vConteneur); // pour ajouter un element
  document.querySelector(".th2").classList.add('test')
});
