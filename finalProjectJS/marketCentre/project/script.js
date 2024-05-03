// change page menu 
document.getElementById("btnCommandes").addEventListener("click",()=>{
    document.getElementById("container_pass_commandes").classList.remove("hidden")
})
// declaration 
// --------------class-------------------
let commandes = []
class commande{
    constructor(fornisseur,produit,dateL,qte){
        this.fornisseur = fornisseur
        this.produit = produit
        this.dateL = dateL
        this.qte = qte
    }

}
// ------------------- declaration items commandes
const input_fornisseur = getE("select_fornisseur")
const input_article = getE("select_produit")
const input_dateL = getE("dateL")
const input_quntite = getE("counter-input")
const btn_ajouter = getE("btn_ajouter")
const btn_confirmer = getE("btn_confirmer")
const input_prix = getE("prix")

//-------------- chargemant de donnes----------------
// ____________fornisseur
document.addEventListener("DOMContentLoaded",()=>{
    let urlF ="https://getpantry.cloud/apiv1/pantry/7cc2178f-af4a-4d0a-aef5-3eb69981b61a/basket/fornisseurs"
    let xhr = new XMLHttpRequest
    xhr.open("GET",urlF,true)
    xhr.onreadystatechange = function (){
        if(this.readyState==4){
            if(this.status>=200 && this.status<300){
                let resp = JSON.parse(this.responseText)
                let dataF = resp.fornisseurs
                let keys = Object.keys(dataF)
                keys.forEach((element)=>{
                    input_fornisseur.innerHTML+=`<option>${element}</option>`
                })
            }
        }
    }
    xhr.send()
})
// _____________produit___________
input_fornisseur.addEventListener("change",()=>{
    input_article.innerHTML=""
    let urlF ="https://getpantry.cloud/apiv1/pantry/7cc2178f-af4a-4d0a-aef5-3eb69981b61a/basket/fornisseurs"
    let xhr = new XMLHttpRequest
    xhr.open("GET",urlF,true)
    xhr.onreadystatechange = function (){
        if(this.readyState==4){
            if(this.status>=200 && this.status<300){
                let resp = JSON.parse(this.responseText)
                let a = input_fornisseur.value
                console.log(a)
                let dataA = resp.fornisseurs[a]
                let keys = Object.keys(dataA)
                keys.forEach((element)=>{
                    input_article.innerHTML+=`<option>${element}</option>`
                })
                input_prix.value = dataA[input_article.value]
            }
        }
    }
    xhr.send()
})
// _______________prix____________________
input_article.addEventListener("change",()=>{
    let urlF ="https://getpantry.cloud/apiv1/pantry/7cc2178f-af4a-4d0a-aef5-3eb69981b61a/basket/fornisseurs"
    let xhr = new XMLHttpRequest
    xhr.open("GET",urlF,true)
    xhr.onreadystatechange = function (){
        if(this.readyState==4){
            if(this.status>=200 && this.status<300){
                let resp = JSON.parse(this.responseText)
                let a = input_fornisseur.value
                let dataA = resp.fornisseurs[a]
                console.log(dataA[input_article.value])
                input_prix.value = dataA[input_article.value]
            }
        }
    }
    xhr.send()
})
// ----------------function---------------------
// function get element by id
function getE(a){
    return document.getElementById(a)
}
// ------------part pass commandes -----------------------
btn_ajouter.addEventListener("click",()=>{
    commandes.push(new commande(input_fornisseur.value,input_article.value,input_dateL.value,input_quntite.value))
    console.log(commandes)
})

    // ------------part affichage facture------------------
// const affichage_facture = getE("affichage_facture")
// commandes.forEach((element)=>{
//     affichage_facture.innerHTML+=`<li class="m-2">
//                                         <p class="font-bold">${element.fornisseur}</p>
//                                         <div class="flex justify-between">
//                                             <div>
//                                                 <p>${element.produit}</p>
//                                             <p>Qte : ${element.qte}</p>
//                                             </div>
//                                             <p>22 Dhs</p>
//                                         </div>
//                                 </li>`
// })    