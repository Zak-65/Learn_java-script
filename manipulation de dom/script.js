console.log(document.body.childNodes)
console.log(document.body.childNodes[1]);


let affichage= [];
affichage={
    nom:'',
    prenom:'',
    age:''
}

let allResaults=[]

document.querySelector("button:first-of-type").addEventListener("click",function(e){
    e.preventDefault()
    let nom = document.querySelector("input").value
    let prenom = document.querySelector("input:nth-of-type(2)").value
    let age = document.querySelector("input:last-of-type").value

    affichage={
        nom:nom,
        prenom:prenom,
        age:age
    }
})

document.querySelector("button:last-of-type").addEventListener("click",function(e){
    e.preventDefault()
    allResaults.push(affichage)
    allResaults.map(function(i)){

    }
})



