// 2):
function videForm(){
    document.querySelectorAll("form>input").forEach((element)=>{
        element.value=""
    })
}
// document.getElementById("consulter").onclick=(videForm)
// 3):
function patMatricul(){
    let patternM= /^[0-9]{1,8}-[a-z]{1}-[0-9]{1,2}$/i
    return patternM.test(document.getElementById("matricule").value)
}
// 4):
function patMarqueCarbu(){
    let patternCM = /^[a-z]{4,15}$/i
   let i =patternCM.test(document.getElementById("marque").value)
    
   let j = patternCM.test(document.getElementById("carburant").value)
    
    return i&&j
}
// 5):
function function5 (){
    let pattenN = /^[0-9]+$/
    let result =  pattenN.test(document.getElementById("prix").value)
    return patMarqueCarbu() && patMatricul() && result
}
document.getElementById("enregistrer").addEventListener("click",()=>{
    if(!function5()){
        document.querySelector("body").style.background="red"
        console.log("format invalid")
    }
    else{
        document.querySelector("body").style.background=""
        console.log("format invalid")
    }
})
// // 6): 
let dataJson = []
document.getElementById("enregistrer").addEventListener("click",()=>{
    if(function5()){
        console.log("goood")
        dataJson.push({matricul:document.getElementById("matricule").value,
        marque:document.getElementById("marque").value,
        modele:document.getElementById("modele").value,
        anneeProd:document.getElementById("anneeProd").value,
        carburant:document.getElementById("carburant").value,
        prix:document.getElementById("prix").value})
    }
    else{
        console.error("all input incorect")
        document.querySelector("body").style.background="red"
    }
})
// 7):
document.getElementById("consulter").addEventListener("click",()=>{
    document.getElementById("affichage").style.display="block"
    dataJson.forEach((element)=>{
        document.querySelector("table>tbody").innerHTML+=`<td>${element.matricul}</td><td>${element.marque}</td><td>${element.modele}</td><td>${element.anneeProd}</td><td>${element.carburant}</td><td>${element.prix}</td>`
    })
})



