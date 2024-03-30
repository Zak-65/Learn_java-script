const stagiaires = {
    "id":1,
    nom:"sidqui",
    prenom:"zakaria",
    age:23
};

// object =====> JSON

let stagiairesJson = JSON.stringify(stagiaires)

console.log(stagiaires)

console.log(stagiairesJson)

// JSON =======>  object

stagiairesJson =JSON.parse(stagiairesJson)

console.log(stagiairesJson)