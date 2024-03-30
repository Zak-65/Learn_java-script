let nom = /(dd)([0-9]{3})/gi;

let prenom = new RegExp("zakaria?");

const article =
  "Lorem Zakaria cava oui et toi zakari en DD105 evec lui et autre DD103 est nous sommes avec ouiii ID101";
// search method ====> -1 or index
let position_search = article.search(nom);
//Match method =====> null or array
let position_match = article.match(nom);
//Replace method ==> replace valur trouve avec une autre
let position_Replace = article.replace(nom, "$1-A1-$2");
// Split metho  "string"===>array
let modules = "PHP/HTML-CSS_POO";
let listModules = modules.split(/[/_]/);
// Test method
let tester = nom.test(article);
// exec method
let tester_exec = nom.exec(article);

console.log(position_search);
console.log(position_match);
console.log(position_Replace);
console.log(listModules);
console.log(tester);
console.log(tester_exec);
