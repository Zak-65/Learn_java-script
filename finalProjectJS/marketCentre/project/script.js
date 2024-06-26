// change page menu 
document.getElementById("btnCommandes").addEventListener("click",()=>{
    document.getElementById("container_pass_commandes").classList.remove("hidden")
    document.getElementById("container_gestion_dashboard").classList.add("hidden")
    document.getElementById("container_gestion_stock").classList.add("hidden")
})

document.getElementById("btnStock").addEventListener("click",()=>{
    document.getElementById("container_gestion_stock").classList.remove("hidden")
    document.getElementById("container_pass_commandes").classList.add("hidden")
    document.getElementById("container_gestion_dashboard").classList.add("hidden")
})
document.getElementById("btnDashboard").addEventListener("click",()=>{
    document.getElementById("container_gestion_dashboard").classList.remove("hidden")
    document.getElementById("container_pass_commandes").classList.add("hidden")
    document.getElementById("container_gestion_stock").classList.add("hidden")
    
})
// declaration 
// --------------class-------------------
let commandes = []
class commande{
    constructor(fornisseur,produit,dateL,prix,qte){
        this.fornisseur = fornisseur
        this.produit = produit
        this.dateL = dateL
        this.prix = prix
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
const totalPrix = getE("totalPrix")

//-------------- chargemant de donnes----------------
// ____________fornisseur_______________
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
btn_ajouter.addEventListener("click",(e)=>{
    e.preventDefault()
    commandes.push(new commande(input_fornisseur.value,input_article.value,input_dateL.value,input_prix.value,input_quntite.value))
})

    // ------------part affichage facture------------------
const affichage_facture = getE("affichage_facture")
btn_confirmer.addEventListener("click",(e)=>{
    e.preventDefault()
    let tPrix = 0
    affichage_facture.innerHTML=""
    commandes.forEach((element)=>{
        tPrix += Number(element.prix)*Number(element.qte)
        affichage_facture.innerHTML+=`<li class="m-2">
                                            <div class="flex justify-between">
                                            <p class="font-bold">${element.fornisseur}</p>
                                            <button>
                                            <i class="fa-solid fa-trash text-red-500 btn_trash "></i>
                                            </button>
                                            </div>
                                            <div class="flex justify-between">
                                                <div>
                                                    <p>${element.produit}</p>
                                                <p>Qte : ${element.qte} x ${element.prix} Dhs</p>
                                                </div>
                                                <p class="mt-6">${element.prix*element.qte}Dhs</p>
                                            </div>
                                    </li>`
                                    console.log(document.getElementsByClassName("btn_trash"))
    })
    totalPrix.textContent= tPrix
}) 

// ------------Fin part pass commandes -----------------------

// ------------part gestion stock -----------------------

function test(e){
    console.log(e.target)
}

document.onclick=function(event){
    test(event)
}
