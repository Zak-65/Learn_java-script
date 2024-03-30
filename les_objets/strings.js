let branche = "developpement"
console.log(branche.length)

console.log(branche.charAt(3))//selectioner lettre par indice

console.log(branche.substring(2,6));

console.log(branche.toUpperCase());

console.log(branche.startsWith("l"))

console.log(branche.endsWith("t"))

console.log(branche.split(" ")) 

console.log(Array.from(branche))

let vDate = new Date();

console.log(vDate.getFullYear());
console.log(vDate.getDate());
console.log(vDate.getMonth()+1);
console.log(vDate.getDay());

 let vDateY = new Date("2023-10-14");

 console.log(vDateY)

 vDateY.setMonth("02");

 console.log(vDateY)