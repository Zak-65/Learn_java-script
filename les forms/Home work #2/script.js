// declaration des variables
const name_input = document.getElementById("name")
const email_input =document.getElementById("email")
const password_input =document.getElementById("password")
const birthay_input = document.getElementById("birthday")
const select_gender = document.getElementById("gender")
const btn_submit = document.getElementById("submit")
// declaration pattern for validation
const name_pattern =/[a-z]+ [a-z]+( [a-z]+)?/i
const email_pattern =/\w+@[a-z]+\.[a-z]+/i
const password_pattern =/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/
// verification patterns
let name_verifie = false
let email_verifie = false
let password_verifie =false
// icone verifier
const verifie_gif =document.getElementById("check_form")
btn_submit.addEventListener("click",(event)=>{
    let cmpt =0
    event.preventDefault()
    name_verifie=name_pattern.test(name_input.value)
    email_verifie=email_pattern.test(email_input.value)
    password_verifie=password_pattern.test(password_input.value)
    if(!name_verifie){
        name_input.nextElementSibling.textContent="Enter your full Name"
    }
    else{
        name_input.nextElementSibling.textContent=""
        cmpt++
    }
    if(!email_verifie){
        email_input.nextElementSibling.textContent="Enter a valid email address"
    }else{
        email_input.nextElementSibling.textContent=""
        cmpt++
    }
    if(!password_verifie){
        password_input.nextElementSibling.textContent="Enter your Password"
    }else{
        password_input.nextElementSibling.textContent=""
        cmpt++
    }
    if(birthay_input.value===""){
        birthay_input.nextElementSibling.textContent="Select your date of birth"
    }else{
        birthay_input.nextElementSibling.textContent=""
        cmpt++
    }
    if(select_gender.value===""){
        select_gender.nextElementSibling.textContent="Select yout gender"
    }else{
        select_gender.nextElementSibling.textContent=""
        cmpt++
    }
    if(cmpt===5){
        verifie_gif.style.display="block"
        setTimeout(()=>verifie_gif.style.display="none",5000)
    }
});