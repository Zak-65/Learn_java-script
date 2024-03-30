// const stagiares = getData().then(function)

// consomateur de la promise
let stagiares3;
let stagiaresNotesListe = [];
getData()
  .then(function (response) {
    console.log(response);
    return getNotes();
  })
  .then(function (response) {
    let result = response;
  })
  .catch(function (error) {
    console.log(error);
  }).finally(function(){
    console.log("finally!!!!!!")
  });



// producteur de la promise
function getData() {
  {
    let vfound = true;
    return new Promise(function (resolve, reject) {
      if (vfound === true) {
        resolve([
          { id: 1, nom: "ELKADIRI", note: 13 },
          { id: 2, nom: "FEYD", note: 10 },
          { id: 3, nom: "SIDQUI", note: 17 },
        ]);
      } else {
        reject("not allowed");
      }
    });
  }
}

function getNotes() {
  return new Promise(function (resolve, reject) {
    resolve([
      { idStagiaire: 1, module: "JavaScript", note: 14 },
      { idStagiaire: 1, module: "HTML", note: 15 },
      { idStagiaire: 1, module: "POO", note: 10 },
      { idStagiaire: 2, module: "JavaScript", note: 20 },
      { idStagiaire: 2, module: "HTML", note: 13 },
      { idStagiaire: 2, module: "POO", note: 9 },
      { idStagiaire: 3, module: "JavaScript", note: 16 },
      { idStagiaire: 3, module: "HTML", note: 1 },
      { idStagiaire: 3, module: "POO", note: 10 },
    ]);
  });
}

document
  .getElementById("affiche-api-data")
  .addEventListener("click", function () {
    let dogA = fetch("https://dog.ceo/api/breeds/image/random")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
      });
  });
