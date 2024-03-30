const stagiares =[
    {id:1,nom:"ELKADIRI",note:13},
    {id:2,nom:"FEYD",note:10},
    {id:3,nom:"SIDQUI",note:17},
    {id:4,nom:"MOUMNI",note:15}
    ]

let listeNotes = stagiares.map(function(itemValue){
    return itemValue.note;
})    
console.log(listeNotes)
let maxNote =Math.max(...listeNotes)

//conso.log(maxNote)
let majorantsListe = stagiares.filter(function(itemValue){
    return itemValue.note === maxNote
})

console.log(majorantsListe)

console.log(Math.floor(Math.random()*20) + 1);