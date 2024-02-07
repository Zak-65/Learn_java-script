// function declaration
// function greet() {
//   console.log("hello!!");
// }

// greet();

// function somme(a, b) {
//   return a + b;
// }

// let m = somme(5, 9);

// function expression

let somme = function (a, b) {
  return a + b;
};

let sm = somme(5, 9);

console.log(sm);

//les fonctions flechees(arrow function)

let a = function () {
  return console.log("helloo world!!");
};

let greet = () => console.log("hello isfo");

let nomcomplet = (nom, prenom) => {
  let fullname = nom + " " + prenom;

  return fullname;
};

console.log(nomcomplet("sidqui", "zakaria"));

greet();

//les exepressions lambdas
// Map(il retourn un nouveau tableau)

const jours = [
  "lundi",
  "mardi",
  "mercredi",
  "jeudi",
  "vendredi",
  "samedi",
  "dimanche",
];

jours.map((item) => {
  if (item === "jeudi") {
    item = item + "* jour férier";
  }

  return console.log(item);
});

console.log(jours);
 
let stagiaires

stagiaires = [
  { nom: "sidqui", prenom: "zakaria", age: 22 },
  { nom: "merzoug", prenom: "khalid", age: 24 },
  { nom: "mohimi", prenom: "yussra", age: 15 },
  { nom: "ouafik", prenom: "mohamed", age: 18 },
];

let nomstagiaires;


nomstagiaires = stagiaires.map((item, index, urstagiares) => {
  let st;
  st = { ...item, branche: "dd", id: index + 1 };
  if (item["age"] >= 20) {
    st.remarque = "plus grand que 20" ;
  } 
  else if (item["age"]<20){
    st.remarque = "plus petit que 20" ;
  }
  return st;
});

console.log(nomstagiaires);
