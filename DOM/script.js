document.querySelector(".btn-calculer").addEventListener("click",(e)=>{
    e.preventDefault()
    let result;
    result = Number(document.querySelector(".nb-un").value)+Number(document.querySelector(".nb-deux").value);
    document.querySelector(".resultat").value = result
    if(result>=20){
        document.querySelector(".resultat").style.backgroundColor="green"
    }
    else{
        document.querySelector(".resultat").style.backgroundColor="red"
    }
});

let test_jeux = function(){
    numero=Number(document.querySelector(".number").value)
    if(numero===17){
        document.querySelector(".jeux-resultat").textContent="win"
        document.querySelector(".jeux").style.backgroundColor="green"
    }
    else{
        document.querySelector(".jeux-resultat").textContent="Repeat"
        document.querySelector(".jeux").style.backgroundColor="red"
    }
};

document.querySelector(".btn_jeux").addEventListener("click",test_jeux);
