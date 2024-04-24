function exam(){
// 1 
document.getElementById("myH1").textContent="Exercice DOM réussi"
// 2
document.querySelectorAll("#liste>li").forEach((element)=>{
    element.classList.add("item-liste")
})
};
// 3
document.getElementById("btn").addEventListener("click",()=>{
    exam()
})
// Exercice 2 :
// 1
document.getElementById("codeLivre").addEventListener("focus",()=>{
    document.getElementById("codeLivre").style.padding="20px"
    document.getElementById("codeLivre").style.background="blue"
})
// 2
function validerCodeLIvre(input){
    let pattern = /^LOT-[0-9]{2}-[0-9]{4}$/
    let result = pattern.test(input.value)
    if(result==false){
        input.style.border="red solid 1px"
        return false
    }else{
        input.style.border="green solid 1px"
        return true
    }
}
// 3
let inputCode = document.getElementById("codeLivre")
let inputLivre = document.getElementById("titre")
let inputGenre = document.getElementById("genre")
let object = {}
let url = "https://getpantry.cloud/apiv1/pantry/7cc2178f-af4a-4d0a-aef5-3eb69981b61a/basket/exam"
document.getElementById("enregistre").addEventListener("click",()=>{
    if(validerCodeLIvre(inputCode)){
        try{
            object = {codeLivre:inputCode.value,titre:inputLivre.value,quantite:inputGenre.value}
        let livres = JSON.stringify(object)
        xhr = new XMLHttpRequest()
        xhr.open("POST",url,true)
        xhr.setRequestHeader("content-type","application/JSON")
        xhr.send(livres)
        xhr.onload = function (){
            if(xhr.status==200){
                console.log("data recived")
                afficherListeLivre()
            }
        }
        }
        catch(error){
            console.error("data non send")
        }
    }
})
function calculer(number){
    if((number)>=10){
        return "en stock"
    }if (number>5 && number<10) {
        return "En contite"
    } else {
        return " en repture"
    }
}

function afficherListeLivre(){
    try{
        let xhr = new XMLHttpRequest();
        xhr.open("GET",url,true)
        xhr.onreadystatechange = function (){
            if(this.readyState==4){
                if(this.status>=200 && this.status<300){
                    console.log("data send")
                    let data = JSON.parse(this.response)
                    document.getElementById("tbody").innerHTML+=`<tr><td>${data.codeLivre}</td><td>${data.titre}</td><td>${data.quantite}</td><td>${calculer(data.quantite)}</td></tr>`
                }
            }
        }
        xhr.send()
    }catch(error){
        console.log("problem in ajax")
    }

}


