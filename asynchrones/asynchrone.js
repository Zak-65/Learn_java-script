document.getElementById("btn-google").addEventListener("click", function () {
  open("https://www.google.com/");
});

// let i = 0;
// setInterval(function () {
//   // Ce exécute chaque fois pendant une seconde SetInterval(a,b) a=une fanction b=la duree
//   i++;
//   console.log(i);
// }, 1000);

setTimeout(function () {
  // Ce exécute une seul fois pendant 5 seconde  SetTimeout(a,b) a=une fanction b=la duree
  console.log("oook 5s a gooo");
}, 5000);

// Appels asynchrone
// let stagiares = getData(function (listStagaires) {
//   console.log(listStagaires);
// });

// function getData(CallBackFunction) {
//   setTimeout(function () {
//     return CallBackFunction(["kadiri", "sidqui", "marzoug"]);
//   }, 3000);
// }


