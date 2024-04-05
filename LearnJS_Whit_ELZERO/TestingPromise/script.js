let valid2 = ["zakaria", "khalid", "ahmed", "issam"];
const myPromise = new Promise((okPromise, noPromise) => {
  let valid = ["zakaria", "khalid", "ahmed", "issam"];
  if (valid.length === 4) {
    okPromise(valid);
  } else {
    noPromise("erooooooooor");
  }
});
myPromise.then((okPromise) => {
  okPromise.length = 2;
  console.log(okPromise);
});
myPromise.then((okPromise) => {
  okPromise;
  console.log(okPromise);
});
myPromise.then((okPromise) => {
  console.log();
});

console.table(valid2);

let t = document.querySelector("[type='text']");

console.log(Error("hadchi ra ghalt"));

const v = confirm("ah ola la");

console.log(v);

console.log(t.value);
