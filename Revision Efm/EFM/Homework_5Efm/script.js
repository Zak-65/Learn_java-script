// Exerciece 2:
// 1):
const formInfo = document.querySelectorAll(".info>input");
const formSelect=document.querySelector(".info>select")
function ValidationChamps(){
    let validation = true
    if(formSelect.value=="course-type"){
        formSelect.classList.add("border","border-danger")
        validation=validation && false
    }
    else{
        formSelect.classList.remove("border","border-danger")
        formSelect.classList.add("border","border-success")
        validation=validation && true
    }
    for(let i=0;i<formInfo.length;i++){
        if(formInfo[i].value==""){
            formInfo[i].classList.add("border","border-danger")
            validation=validation && false
        }
        else{
            formInfo[i].classList.remove("border","border-danger")
            formInfo[i].classList.add("border","border-success")
            validation=validation && true
        }
    }
    return validation
};
// document.getElementById("btn_envoyer").addEventListener("click",ValidationChamps)
// 2):
function verifTel(){
    let pat =/[0-9]{10}/
    if(!pat.test(document.getElementsByName("tel")[0].value)){
        console.error("numero moin de 10 number");
    }
}
// verifTel()
// 3):
//  verifier ex3.html
// 4):
// verifier ex3.html
// 5):
function viderLesChamps(){
    formSelect.value=""
    for(let i=0;i<formInfo.length;i++){
        formInfo[i].value="course-type"
    }
}
// viderLesChamps()
// 6):
function rumplireType(){
    const request = new XMLHttpRequest();
    request.open("GET", "info.json", true);
    request.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
       let infos = JSON.parse(this.responseText).types;
        infos.forEach((element) => {
          formSelect.innerHTML += `<Option value="${element.nom}">${element.nom}</Option>`;
        });
      }
    };
    request.send()
}
rumplireType()





