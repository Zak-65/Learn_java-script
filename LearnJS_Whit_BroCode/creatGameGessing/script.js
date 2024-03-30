let cmpt=0
let afficherResult = document.getElementById("result");
let randomNumber = Math.floor(Math.random() * 100) + 1;

document.getElementById("btnRestart").onclick=function(){
    document.getElementById("cmpt").textContent=0
    cmpt=0
    afficherResult.textContent = "";
}

document.getElementById("btnStarGame").onclick=function(){
    document.getElementById("containerGame").style.display="block"
    document.getElementById("btnRestart").style.display="inline"

}

document.getElementById("btnCheck").onclick = function () {
    console.log(cmpt)
  let nbrSending = Number(document.getElementById("nbrSending").value);
  if (nbrSending === randomNumber) {
    afficherResult.textContent = `Win number repeat is : ${cmpt}`;
  } else if (nbrSending=="") {
    afficherResult.textContent = "Please entre a number";
  } else{
    document.getElementById("cmpt").textContent=cmpt+=1
  }
  console.log(randomNumber);
};

