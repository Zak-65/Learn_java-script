document.getElementById("btnTest").onclick = function () {
  const passwordLenght = document.getElementById("passwordLenght").value;
  const includeLowercase = document.getElementById("inputLowercase").checked;
  const includeUpercase = document.getElementById("inputUpercase").checked;
  const includeNumbers = document.getElementById("inputNumbers").checked;
  const includeSymobls = document.getElementById("inputSymobls").checked;
  const password = generatePassword(
    passwordLenght,
    includeLowercase,
    includeUpercase,
    includeNumbers,
    includeSymobls
  );
  document.getElementById("h1Test").textContent = password;
};

// Password Generator

function generatePassword(
  passwordLenght,
  includeLowercase,
  includeUpercase,
  includeNumbers,
  includeSymobls
) {
  const LowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const UppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const NumbersChars = "0123456789";
  const SymoblsChars = "@.*/?-_";

  let allowedChars = "";
  let password = "";

  allowedChars += includeLowercase ? LowercaseChars : "";
  allowedChars += includeUpercase ? UppercaseChars : "";
  allowedChars += includeNumbers ? NumbersChars : "";
  allowedChars += includeSymobls ? SymoblsChars : "";
  if (passwordLenght <= 0) {
    return `minimum 1`;
  }
  if (allowedChars.length === 0) {
    return `selectioner minmum une caracter`;
  }
  for (let i = 0; i < passwordLenght; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }
  return password;
}
