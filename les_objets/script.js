// function Stagiaire(nom, prenom, age, branche) {
//   this.nom = nom;
//   this.prenom = prenom;
//   this.age = age;
//   this.branche = branche;
//   this.presenterVous = function () {
//     console.log("I am " + this.nom + " " + this.prenom);
//     // pour affichage simple
//     console.log(`I am ${this.nom} ${this.prenom}`);
//   };
// }
// const Stagiaire2 = new Stagiaire("sidqui", "zakaria", 22, "devloppment");
// console.log(Stagiaire2.presenterVous());

function Achat(id, article, prix, Qte) {
  this.id = id;
  this.article = article;
  this.prix = prix;
  this.Qte = Qte;
  this.CalculeTva = function () {
    this.prixTTC = (this.prix + (this.prix * 20) / 100) * this.Qte;
    return this.prixTTC;
  };
}

const Achat1 = new Achat(1, "TV", 10000, 3);
console.log(
  `Vous avez efectuez Un Achat de ${Achat1.Qte} ${Achat1.article}  le prix TTC est : ${Achat1.CalculeTva()} Dh`
);

// Stagiaire1 = {
//   nom: "ait",
//   prenom: "mohamed",
//   age: 17,
//   branche: "dev",
//   presenterVous: function () {
//     console.log("I am " + this.nom + " " + this.prenom);
//   },
// };

// console.log(Stagiaire1.nom);
// console.log(Stagiaire1.branche);
// console.log(Stagiaire1.presenterVous());

// methode pour cree une class pour ES6

class Achaat{
    constructor(id,article,prix,quantite){
        this.id=id;
        this.article=article;
        this.prix=prix;
        this.quantite=quantite;
    }
    CalculeTva(){
        const TVA = 0.2;
        let total =this.prix * this.quantite;
        let totalTTC = total + (total*TVA)
        return totalTTC
    }
}

const Achaat1 = new Achaat(1,"telephone",2000,10)
const Achaat2 = new Achaat(2,"keybord",200,2)

console.log(Achaat2.CalculeTva())
console.log(Achaat1.CalculeTva())