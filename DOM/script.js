




document.querySelector(".btn-calculer").addEventListener("click",(e)=>{
    e.preventDefault()

    let btntext = document.querySelector(".btn-calculer").textContent;
    if (btntext ==="Calculer"){

        let result;
        result = Number(document.querySelector(".nb-un").value)+Number(document.querySelector(".nb-deux").value);
        document.querySelector(".resultat").value = result
        if(result>=20){
            document.querySelector(".resultat").style.backgroundColor="green"
        }
        else{
            document.querySelector(".resultat").style.backgroundColor="red"
        }
        document.querySelector(".btn-calculer").textContent="Vider"
        document.querySelector(".btn-calculer").style.backgroundColor="yellow"
        

    }
    else{
        document.querySelector(".nb-un").value=""
        document.querySelector(".nb-deux").value=""
        document.querySelector(".resultat").value=""
        document.querySelector(".btn-calculer").textContent="Calculer"
        document.querySelector(".btn-calculer").style.backgroundColor="aquamarine"

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

// _____________________________________


let vInput  = document.querySelectorAll("input");


for (let i = 0 ; i <= 3 ; i++){

    vInput[i].style.backgroundColor="red";
    vInput[i].style.color="white";


}

console.log(vInput[1]);


console.log(vInput.length);


// _____________________________________

document.querySelector(".btn-calculer").style.border = "solid 2px aqua";
document.querySelector(".btn-calculer").style.marginTop="20px";
document.querySelector(".btn-calculer").style.width="150px";
document.querySelector(".btn-calculer").style.height="50px";
document.querySelector(".btn-calculer").style.backgroundColor="aquamarine"

// _____________getElementById ___________________

let titre = document.getElementById("dd105")

titre.textContent="Resaux";
titre.style.color="red";
titre.style.backgroundColor="black";
titre.style.display="flex";
titre.style.justifyContent="center";
titre.style.borderRadius="15px"

// ______________getElementsByClassName_______________

console.log(document.getElementsByClassName("digital"));

let vDigital = document.getElementsByClassName("digital")

for (let i =0 ; i<= vDigital.length-1 ; i++){

    vDigital[i].style.border="solid 2px green"

};

document.getElementsByClassName("digital")[1].style.backgroundColor = "aqua";

//  ______________getElementsByTagName_______________

console.log(document.getElementsByTagName("button"));
for (let i = 0 ; i<2 ;i++){
    document.getElementsByTagName("button")[i].style.fontWeight="bold"
}


console.log(document.title)

document.title="Learn Pyhton"

console.log(document.title)