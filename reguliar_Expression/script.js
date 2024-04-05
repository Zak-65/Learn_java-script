const patternEmail = /([a-z]|[0-9]){2,}@[a-z]{2,}\.[a-z]{2,}/i;
const patternPassword =
  /(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,}/;
const btn_envoyer = document.getElementById("valide");

const errorEmail = document.getElementById("show_email");
const errorPassword = document.getElementById("show_password");
let verifierEmail = false;
let verifierPassword = false;

btn_envoyer.addEventListener("click", (e) => {
  e.preventDefault();

  verifierEmail = patternEmail.test(
    document.getElementById("inpt_email").value
  );
  verifierPassword = patternPassword.test(
    document.getElementById("inpt_password").value
  );

  if (verifierEmail != true) {
    errorEmail.innerText = "votre format email n'est pas correct";
    errorEmail.style.color = "red";
  }
  if (verifierPassword != true) {
    errorPassword.innerHTML = "votre format password n'est pas correct";
    errorPassword.style.color = "red";
  }
});
