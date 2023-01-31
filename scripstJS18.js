'use strict';
let arr1 = [5, 6, 7, 8, 9];
let sum = 0;
let each = arr1.forEach((element, ind, arr) => (sum += arr[ind]));
console.log(sum);

let arr2 = [5, 6, 7, 8, 9];
let map2 = arr2.map((value) => Math.pow(value, 2));
console.log(map2);

let arr3 = [
  { name: "Ivan", country: "Ukraine" },
  { name: "Petro", country: "Ukraine" },
  { name: "Miguel", country: "Cuba" },
];
let ukr = arr3.every((value) => value.country === "Ukraine");
console.log(ukr);

let arr4 = [
  { name: "Ivan", country: "Ukraine" },
  { name: "Petro", country: "Ukraine" },
  { name: "Miguel", country: "Cuba" },
];
let cuba = arr4.some((value) => value.country === "Cuba");
console.log(cuba);

let arr5 = [1, "string", [3, 4], 5, [6, 7]];
let filt = arr5.filter((value) => Array.isArray(value));
console.log(filt);

let arr6 = [1, 2, 5, 0, 4, 5, 6];
let q = arr6.indexOf(0);
let end = arr6.slice(-1);
let suma1 = arr6.splice(q, end);
let suma = arr6.reduce((total, elem) => total + elem, 0);
console.log(suma);

let array61 = [1, 2, 3, 0, 4, 5, 6];
let summa = array61.reduce(
  function (accum, num) {
    if (accum[1] < 10) {
      return [accum[0] + 1, accum[1] + num];
    } else {
      return accum;
    }
  },
  [0, 0]
)[0];
console.log(summa);

let arr7 = [1, -2, 3, 0, 4, -5, 6, -11];
let metod = arr7.filter((value) => value >= 0).map((value) => Math.sqrt(value));
console.log(metod);


