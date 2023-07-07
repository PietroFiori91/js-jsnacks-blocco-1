const numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let somma = 0;

for (let i = 0; i < numeri.length; i += 2) {
  console.log(numeri[i]);
  somma += numeri[i];
}
console.log("____");
console.log(somma);

// const somma = numeri.length.value;
// console.log(somma);
// BRUTTO TENTATIVO

// const listaNumeri = [];

// for (let i = o; i < 30; i++) {
//   const numero = Math.floor(Math.random() * 100) + 1;
// }
